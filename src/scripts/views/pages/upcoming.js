import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieReviewTemplate } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx';

const Upcoming = {
  async render() {
    return `
      <article-list class="content">
       <div class="box-dua"  align="center"><div class="loader"></div></div>
        <h2 class="content__heading">Description</h2>
        <div id="review" class="lazyload review" data-expand="-20">  </div>
        <div id="reviews" class="reviews"></div>           
      </artile-list>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#review');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieReviewTemplate(movie);
    });

    const table = async () => {
      const restaurant = await TheMovieDbSource.nowPlayingMovies();
      console.log('data of restaurant :', restaurant);
    };

    table();

    const detik02 = new Date().getSeconds();
    const second02 = new Date().getSeconds() + 5;

    do {
      document.querySelector('.box-dua').classList.add('posisi');
    } while (detik02 > second02);
  },
};

export default Upcoming;
