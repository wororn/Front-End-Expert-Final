import FavoriteMovieSearchPresenter
  from '../src/scripts/views/pages/liked-movies/favorite-movie-search-presenter';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';
import FavoriteMovieSearchView
  from '../src/scripts/views/pages/liked-movies/favorite-movie-search-view';

describe('Searching restaurant', () => {
  let presenter;
  let favoriteMovies;
  let view;

  const searchMovies = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setMovieSearchContainer = () => {
    view = new FavoriteMovieSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  const constructPresenter = () => {
    favoriteMovies = spyOnAllFunctions(FavoriteMovieIdb);
    presenter = new FavoriteMovieSearchPresenter({
      favoriteMovies,
      view,
    });
  };

  beforeEach(() => {
    setMovieSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      searchMovies('Melting Pot');

      expect(presenter.latestQuery)
        .toEqual('Melting Pot');
    });

    it('should ask the model to search for restaurants', () => {
      searchMovies('Melting Pot');

      expect(favoriteMovies.searchMovies)
        .toHaveBeenCalledWith('Melting Pot');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundMovies([{ id: 'rqdv5juczeskfw1e867' }]);
      expect(document.querySelectorAll('.movie-item').length)
        .toEqual('rqdv5juczeskfw1e867');

      presenter._showFoundMovies([{
        id: 'rqdv5juczeskfw1e867',
        name: 'Melting Pot',
      }, {
        id: s1knt6za9kkfw1e867,
        name: 'Kafe Kita',
      }]);
      expect(document.querySelectorAll('.movie-item').length)
        .toEqual('s1knt6za9kkfw1e867');
    });

    it('should show the title of the found restaurant', () => {
      presenter._showFoundMovies([{
        id: 'rqdv5juczeskfw1e867',
        name: 'Melting Pot',
      }]);
      expect(document.querySelectorAll('.movie__title')
        .item(0).textContent)
        .toEqual('Melting Pot');
    });

    it('should show - when the restaurant returned does not contain a title', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        const movieTitles = document.querySelectorAll('.movie__title');
        expect(movieTitles.item(0).textContent).toEqual('-');

        done();
      });

      favoriteMovies.searchMovies.withArgs('Melting Pot').and.returnValues([
        { id:'rqdv5juczeskfw1e867' },
      ]);

      searchMovies('Melting Pot');
    });
  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      searchMovies(' ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchMovies('    ');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchMovies('');
      expect(presenter.latestQuery.length)
        .toEqual(0);

      searchMovies('\t');
      expect(presenter.latestQuery.length)
        .toEqual(0);
    });

    it('should show all favorite restaurant', () => {
      searchMovies('    ');
      expect(favoriteMovies.getAllMovies)
        .toHaveBeenCalled();
    });
  });

  describe('When no favorite restaurants could be found', () => {
    it('should show the empty message', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item__not__found').length).toEqual(1);
        done();
      });

      favoriteMovies.searchMovies.withArgs('restaurant a').and.returnValues([]);

      searchMovies('Melting Pot');
    });

    it('should not show any restaurant', (done) => {
      document.getElementById('movies').addEventListener('movies:updated', () => {
        expect(document.querySelectorAll('.movie-item').length).toEqual(0);
        done();
      });

      favoriteMovies.searchMovies.withArgs('Melting Pot')
        .and
        .returnValues([]);

      searchMovies('Melting Pot');
    });
  });
});
