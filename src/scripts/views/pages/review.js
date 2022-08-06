import fetch from 'node-fetch';
import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createAddReviewTemplate } from '../templates/template-creator';
import CONFIG from '../../globals/config';

fetch('https://restaurant-api.dicoding.dev')
  .then((res) => {
    console.log('OK:', res.ok);
    console.log('Status:', res.status);
    console.log('Status Text', res.statusText);
    console.log('Content Type :', res.headers.get('content-type'));
  });

const myResponse = Response.error();

try {
  myResponse.headers.set('origin', 'https://restaurant-api.dicoding.dev/review');
} catch (error) {
  console.log('cannot define the address of url: restaurant-api.dicoding.dev/review ');
}

const Review = {
  async render() {
    return `
      <article-list class="content">
        <div class="box-empat" align="center"><div class="loader"></div></div>
        <p class="satu"></p>
        <p class="dua"></p>
        <p class="tiga"></p>
        <p class="empat"></p> 
        <p class="lima"></p>
        <p></p>
        <p></p>
        <p></p>    
          <h2 class="content__heading">Add Review</h2>
          <div id="movie" class="movie"> </div>
      </article-list>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createAddReviewTemplate(movie);

    // }); //akhir dari tampilkan data

    fetch('https://restaurant-api.dicoding.dev')
      .then((res) => {
        const satu = `OK:${res.ok}`;
        const one = document.querySelector('.satu');
        one.innerHTML = satu;

        const dua = `Status:${res.status}`;
        const two = document.querySelector('.dua');
        two.innerHTML = dua;

        const tiga = `Status Text${res.statusText}`;
        const three = document.querySelector('.tiga');
        three.innerHTML = tiga;

        const empat = `Content Type :${res.headers.get('content-type')}`;
        const four = document.querySelector('.empat');
        four.innerHTML = empat;
      });

    try {
      myResponse.headers.set('origin', 'https://restaurant-api.dicoding.dev/review');
    } catch (error) {
      const lima = 'cannot define the address of url: restaurant-api.dicoding.dev/review ';
      const five = document.querySelector('.lima');
      five.innerHTML = lima;
    }

    // }); //akhir dari verifikasi koneksi

    const insertReview = async (customerreviews) => {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json,text/plain,*/*',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'X-Auth-Token': '12345',
        },
        body: JSON.stringify(customerreviews),
      };

      const response = await fetch(`${CONFIG.BASE_URL_REVIEW}`, options);
      const responseJSON = await response.json();
      return responseJSON.customerreviews;
    };

    // document.addEventListener("readystatechange", () => {

    const inputReviewId = document.querySelector('.id');
    const inputReviewName = document.querySelector('.name');
    const inputReview = document.querySelector('.review');
    const buttonSave = document.querySelector('.buttonSave');

    buttonSave.addEventListener('click', () => {
      const customerreviews = {
        id: inputReviewId.value,
        name: inputReviewName.value,
        review: inputReview.value,
      };
      insertReview(customerreviews);
      console.log(customerreviews);
    });

    // }); //akhir dari addeventlistener

    // akhir dari penyimpanan

    const detik04 = new Date().getSeconds();
    const second04 = new Date().getSeconds() + 5;

    do {
      document.querySelector('.box-empat').classList.add('posisi');
    } while (detik04 > second04);

    // akhir dari hidden loading
  },

};

export default Review;
