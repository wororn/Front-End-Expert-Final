import FavoriteMovieSearchView
  from '../src/scripts/views/pages/liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter
  from '../src/scripts/views/pages/liked-movies/favorite-movie-show-presenter';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteMovieSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb);

      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });

      expect(favoriteMovies.getAllMovies).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item__not__found').length).toEqual(1);
        done();
      });

      const favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb);
      favoriteMovies.getAllMovies.and.returnValues([]);

      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item').length).toEqual(2);
        done();
      });

      const favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb);
      favoriteMovies.getAllMovies.and.returnValues([
        {
          id: 'rqdv5juczeskfw1e867', name: 'Melting Pot', rating: 4.2, city: 'Medan',
        },
        {
          id: 's1knt6za9kkfw1e867', name: 'Kafe Kita', rating: 4, city: 'Gorontalo',
        },
      ]);

      new FavoriteMovieShowPresenter({
        view,
        favoriteMovies,
      });
    });
  });
});
