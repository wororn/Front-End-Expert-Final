import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/optimumx/ls.optimumx';

class articlecategory extends HTMLElement {}
customElements.define('article-category', articlecategory);
class articlefood extends HTMLElement {}
customElements.define('article-food', articlefood);
class articledrink extends HTMLElement {}
customElements.define('article-drink', articledrink);
class articlereview extends HTMLElement {}
customElements.define('article-review', articlereview);
class articlecode extends HTMLElement {}
customElements.define('article-code', articlecode);

const createMovieDetailTemplate = (movie) => `
 
  <div class="lazyload movie__header" data-expand="-20">
        <div class="lazyload picture" data-expand="-20"> 
          <img class="movie__poster" alt="${movie.name}"
              src="${CONFIG.BASE_IMAGE_URL}/${movie.pictureId}"
              data-srcset="${CONFIG.BASE_IMAGE_URL}/${movie.pictureId}" 
              data-sizes="auto"
              data-optimumx="1.5"
              data-parent-fit="cover"
              style="object-fit:fill;object-position:center">
        </div>
          <div class="movie-item__header__rating" style="justify-content:left">
                <p><img src="../../public/icons/star.png"><span class="movie-item__header__rating"><strong>${movie.rating}</strong></span></p>
         </div>
         <div class="movie-item__header__city" style="justify-content:left">
                <p style="padding:0;margin:0"><img src="../../public/icons/location.png"><span class="movie-item__header__city"><strong>${movie.city}</strong></span></p>
         </div>
  </div>
  
  <div class="movie__info" style="" tabindex="0">
        <h3>Information</h3>
        <a href="${`/#/review/${movie.id}`}" style="min-height:44px;min-width:44px;display:inline-block" tabindex="0">${movie.name}</a>
            <h4>Alamat</h4>
            <p>${movie.address}</p>
            
            <h4>Kategori</h4>
                <article-category >
                    <ul style="overflow-y:scroll;">
                    ${movie.categories.map(
    (kategori) => `<li class="detail__category-item">${kategori.name}</li>`,
  )
    .join().replaceAll(',', '')
}
                </ul>
                </article-category>
            <h4>Makanan</h4>
                <article-food>
                    <ul style="overflow-y:scroll;max-height:100px">
                    ${movie.menus.foods.map(
    (food) => `<li class="detail__menu-item">${food.name}</li>`,
  )
    .join().replaceAll(',', '')
}
                    </ul>
                </article-food>  
            <h4>Minuman</h4>
                <article-drink>
                    <ul  style="overflow-y:scroll;max-height:100px">
                    ${movie.menus.drinks.map(
    (drink) => `<li class="detail__menu-item">${drink.name}</li>`,
  )
    .join().replaceAll(',', '')
}
                    </ul>
                </article-drink>
                <a href="${`/#/review/${movie.id}`}" style="min-height:44px;min-width:44px;display:inline-block" tabindex="0">Customer Review</a>
               
                        <article-review>                    
                            <ul  style="overflow-y:scroll;max-height:200px">
                            ${movie.customerReviews.map(
    (review) => `<li class="detail__category-item"><strong>${review.name}</strong><br>&nbsp;<quote>&quot;${review.review}&quot;</quote><br>&nbsp;Tgl. ${review.date}</li><br> `,
  )
    .join().replaceAll(',', '')
}
                              
                            </ul>                        
                         </article-review>                
  </div>
 
`;

const createMovieItemTemplate = (movie) => `
  <div class="lazyload movie-item" style="width:100%;height:auto" tabindex="0" data-expand="-20">
    <div class="lazyload picture" data-expand="-20"> 
    <img class="lazyload movie-item__header__poster" alt="${movie.name}"
        data-src="${CONFIG.BASE_IMAGE_URL}/${movie.pictureId}" 
        data-srcset="${CONFIG.BASE_IMAGE_URL}/${movie.pictureId}" 
        data-sizes="auto"
        data-optimumx="1.5"
        data-parent-fit="cover"
        style="object-fit:fill";object-position:center">
    </div>

    <div class="movie-item__header__rating" style="justify-content:left">
         <p><img src="../../public/icons/star.png"><span class="movie-item__header__rating" style="color:black"><strong>${movie.rating}</strong></span></p>
    </div>

    <div class="movie-item__header__city" style="justify-content:left">
        <p style="padding:0;margin:0"><img src="../../public/icons/location.png"><span class="movie-item__header__city"><strong>${movie.city}</strong></span></p>
    </div>
    
    <div class="movie-item__content" style="width:100%;">
     <h3 class="movie__title"> <a href="${`/#/detail/${movie.id}`}" style="min-height:44px;min-width:44px;display:inline-block" tabindex="0">${movie.name}</a></h3>
        <p class="description" style="overflow-y:scroll;max-height:300px" tabindex="0">${movie.description}</p>
    </div>
  </div>
  `;

const createMovieReviewTemplate = (movie) => `
<div class="lazyload review-item" tabindex="0" data-expand="-20">
    <div class="lazyload review-item__content" data-expand="-20">
    
        <h4>Nama</h4>
        <p>${movie.name}</p>
        <h4>Description</h4>
        <p class="description" style="justify-content:Justify" tabindex="0">${movie.description}</p>
        <article-code style="display:none">${movie.id}</article-code>
        <p></p>
        
    </div>   
</div>
`;
const createReviewDetailTemplate = (movie) => `
<div class="movie-item">
    <div class="movie-item__content">
    <h3>Information</h3>
       
        <h4>Review</h4>
        <article-review> 
                <ul style="overflow-y:scroll;max-height:100px">
                ${movie.customerReviews.map(
    (reviews) => `<li class="detail__category-item">${reviews.review}</li>`,
  )
    .join().replaceAll(',', '')
}
                </ul>
        </article-review>
        
    </div>  
</div>
`;

const createAddReviewTemplate = (movie) => `
<div class="lazyload review-item" style="width:100%;justify-content:center" tabindex="0">
    <div class="review-item__content" style="width:100%">
       
        <p></p>
        <input type="hidden" value="${movie.id}" class="id"  style="min-height:44px;min-width:44px;" size="30" tabindex="0"></input>
        <center><p style="color:red;min-height:44px;min-width:44px;">${movie.name}</p></center>
            <h4>Nama   :</h4>
            <input type="text" value="" class="name" style="width:80%;min-height:44px;min-width:44px;" size="30" tabindex="0"></input>
            <h4>Review :</h4>
            <textarea class="review"   style="margin:0;width:100%;height:100px;min-height:44px;min-width:44px;" size="500" tabindex="0"></textarea>
            <p>&nbsp;</p>
            <p style="align:right"><button class="buttonSave" style="margin:3px;min-height:44px;min-width:44px;" tabindex="0">&nbsp; Save &nbsp;</button></p>
    </div>
</div>
`;

// akhir dari template halaman ****

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like" style="min-height:44px;min-width:44px;">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like" style="min-height:44px;min-width:44px;">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createMovieReviewTemplate,
  createReviewDetailTemplate,
  createAddReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
