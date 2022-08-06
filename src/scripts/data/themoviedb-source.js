import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJSON = await response.json();
    return responseJSON.restaurants;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async addReviewMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }

  static async searchMovie(id) {
    const response = await fetch(API_ENDPOINT.SEARCH(id));
    const responseJSON = await response.json();
    return responseJSON.restaurant;
  }
}

export default TheMovieDbSource;
