import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the reataurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 'rqdv5juczeskfw1e867' });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 'rqdv5juczeskfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const movie = await FavoriteMovieIdb.getMovie('rqdv5juczeskfw1e867');

    expect(movie).toEqual({ id: 'rqdv5juczeskfw1e867' });

    FavoriteMovieIdb.deleteMovie('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({ id: 'rqdv5juczeskfw1e867' });

    
    await FavoriteMovieIdb.putMovie({ id: 'rqdv5juczeskfw1e867' });
    
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
   
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([{ id: 'rqdv5juczeskfw1e867' }]);

    FavoriteMovieIdb.deleteMovie('rqdv5juczeskfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithMovie({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
  });
});
