const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

 Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');
 });

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.seeElement('.movie__title a');

  const firstRestaurant = locate('.movie__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedRestaurantTitle = await I.grabTextFrom('.movie__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

 Scenario('searching restaurants', async ({ I }) => {
   I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');

   I.amOnPage('/');

   I.seeElement('.movie__title a');

   const titles = [];

   for (let i = 1; i <= 3; i++) {
     I.click(locate('.movie__title a').at(i));
     I.seeElement('#likeButton');
     I.click('#likeButton');
     titles.push(await I.grabTextFrom('.movie__title'));
     I.amOnPage('/');
   }

   I.amOnPage('/#/like');
   I.seeElement('#query');

   const searchQuery = titles[1].substring(1, 3);
   const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

   I.fillField('#query', searchQuery);
   I.pressKey('Enter');

   const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.movie-item');
   assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

   matchingRestaurants.forEach(async (title, index) => {
     const visibleTitle = await I.grabTextFrom(locate('.movie__title').at(index + 1));
     assert.strictEqual(title, visibleTitle);
   });
 });
