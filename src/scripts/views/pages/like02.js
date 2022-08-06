import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createMovieItemTemplate } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx';

const Like = {
  async render() {
    return `
      <article-list class="content">
      <div class="box-lima" align="center"><div class="loader"></div></div>
        <h2 class="content__heading">Your's Favorites</h2>
        <div id="movies" class="lazyload movies" data-expand="-20"></div>
      </article-list>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    console.log(movies);
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });

    const detik05 = new Date().getSeconds();
    const second05 = new Date().getSeconds() + 5;

    do {
      document.querySelector('.box-lima').classList.add('posisi');
    } while (detik05 > second05);
  },
};

export default Like;
