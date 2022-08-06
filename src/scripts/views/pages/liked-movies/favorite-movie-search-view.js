import { createMovieItemTemplate } from '../../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx';

class FavoriteMovieSearchView {
  getTemplate() {
    return `
       <article-list class="content">
       <div class="box-lima" align="center"><div class="loader"></div></div>
       Ketik Nama Restaurant : <input id="query" type="text" size="30" style="min-height:44px;min-width:44px;">
       <h2 class="content__heading">Your's Favorites</h2>
           <div id="movies" class="lazyload movies" data-expand="-20">
                      
           </div>
       </article-list>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showMovies(movies) {
    this.showFavoriteMovies(movies);
  }

  showFavoriteMovies(movies = []) {
    let html;
    if (movies.length) {
      html = movies.reduce((carry, movie) => carry.concat(createMovieItemTemplate(movie)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('movies').innerHTML = html;

    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="movie-item__not__found movies__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteMovieSearchView;
