import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx';

class articlelist extends HTMLElement {}
customElements.define('article-list', articlelist);

const NowPlaying = {
  async render() {
    return `
      <article-list class="content" style="margin:0">
      <div class="box-satu" align="center"><div class="loader"></div></div>

      <div class="jumbotron" 
       style="background-size:100% 100%;background-position:center center;background-color:transparent;width:100%;height:90%;left:0;right:0">
        <h1 class="jumbotron__title">
          <p style="align:center;display:inline-block">Hungry ?,</p><br>
          <p style="align:center;display:inline-block">You are in the right place.</p>
        </h1>
      </div>    

        <div class="content__headline" style="width=100%;"><h2 class="content__heading">Restaurant Places</h2><div>
        <div id="movies" class="lazyload movies" data-expand="-20">

        </div>  
      </article-list>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
    const moviesContainer = document.querySelector('#movies');

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });

    const detik01 = new Date().getSeconds();
    const second01 = new Date().getSeconds() + 5;
    console.log(detik01);
    console.log(second01);

    do {
      document.querySelector('.box-satu').classList.add('posisi');
    } while (detik01 > second01);
  },

};

export default NowPlaying;
