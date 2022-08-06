const assert = require('assert');

Feature('unLiking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

 Scenario('showing unliked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');
 });

Scenario('amount of unliked restaurant still exist', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.seeElement('.movie__title a');

  const firstRestaurant = locate('.movie__title a').first();
  const firstResturantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie-item');
  const likedRestaurantTitle = await I.grabTextFrom('.movie__title');

  assert.strictEqual(firstResturantTitle, likedRestaurantTitle);
});


Scenario('unliking restaurant at all', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');
  
  I.amOnPage('/#/like');
  I.seeElement('#query');

  const Restaurant = await I.grabTextFrom(locate('.query'));

  I.amOnPage('/#/like');
  I.seeElement('.movies');

  const UnVisibleRestaurant = await I.grabTextFrom(locate('.movies'));
  assert.strictEqual(Restaurant, UnVisibleRestaurant);  

});

 Scenario('searching restaurants', async ({ I }) => {
   I.see('Tidak ada restaurant untuk ditampilkan', '.movie-item__not__found');

   I.amOnPage('/');

   I.seeElement('.movie__title a');

     const titles = [];
  
     I.click(locate('.movie__title a').at(1));
     I.seeElement('#likeButton');
     I.click('#likeButton');
     titles.push(await I.grabTextFrom('.movie__title'));
     I.amOnPage('/');
   
   I.amOnPage('/#/like');
   I.seeElement('#query');

   const searchQuery = titles[1].substring(1, 1);
   const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) == -1);

   I.fillField('#query', searchQuery);
   I.pressKey('Enter');

   const visibleUnLikedRestaurants = await I.grabNumberOfVisibleElements('.movie-item');
   assert.strictEqual(matchingRestaurants.length, visibleUnLikedRestaurants);  

 });
