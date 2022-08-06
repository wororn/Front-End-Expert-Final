import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx';

const Detail = {
  async render() {
    return `
     <article-list class="content">
      <div class="box-tiga" align="center"><div class="loader"></div></div>
      <div id="movie" class="lazyload movie" data-expand="-20"></div>
      <div id="likeButtonContainer"></div>
    </article-list>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: movie.id,
        pictureId: movie.pictureId,
        name: movie.name,
        city: movie.city,
        rating: movie.rating,
        description: movie.description,

      },
    });

    // akhir dari likebutton

    const detik03 = new Date().getSeconds();
    const second03 = new Date().getSeconds() + 5;

    do {
      document.querySelector('.box-tiga').classList.add('posisi');
    } while (detik03 > second03);
  },
};

export default Detail;
