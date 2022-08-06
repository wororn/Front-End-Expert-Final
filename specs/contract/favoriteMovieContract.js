const itActsAsFavoriteMovieModel = (favoriteMovie) => {
  it('should return the restaurant that has been added', async () => {
    favoriteMovie.putMovie({ id: 'rqdv5juczeskfw1e867' });
    favoriteMovie.putMovie({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteMovie.getMovie('rqdv5juczeskfw1e867'))
      .toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favoriteMovie.getMovie('s1knt6za9kkfw1e867'))
      .toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favoriteMovie.getMovie('w9pga3s2tubkfw1e867'))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteMovie.putMovie({ aProperty: 'property' });

    expect(await favoriteMovie.getAllMovies())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteMovie.putMovie({ id: 'rqdv5juczeskfw1e867' });
    favoriteMovie.putMovie({ id: 's1knt6za9kkfw1e867' });

    expect(await favoriteMovie.getAllMovies())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteMovie.putMovie({ id: 'rqdv5juczeskfw1e867' });
    favoriteMovie.putMovie({ id: 's1knt6za9kkfw1e867' });
    favoriteMovie.putMovie({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteMovie.deleteMovie('rqdv5juczeskfw1e867');

    expect(await favoriteMovie.getAllMovies())
      .toEqual([
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });

  it('should handle request to remove a restaurant even though the movie has not been added', async () => {
    favoriteMovie.putMovie({ id: 'rqdv5juczeskfw1e867' });
    favoriteMovie.putMovie({ id: 's1knt6za9kkfw1e867' });
    favoriteMovie.putMovie({ id: 'w9pga3s2tubkfw1e867' });

    await favoriteMovie.deleteMovie('uewq1zg2zlskfw1e867');

    expect(await favoriteMovie.getAllMovies())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
        { id: 'w9pga3s2tubkfw1e867' },
      ]);
  });

  it('should be able to search for restaurants', async () => {
    favoriteMovie.putMovie({ id: 'rqdv5juczeskfw1e867', name: 'Melting Pot' });
    favoriteMovie.putMovie({ id: 's1knt6za9kkfw1e867', name: 'Kafe Kita' });
    favoriteMovie.putMovie({ id: 'w9pga3s2tubkfw1e867', name: 'Bring Your Phone Cafe' });
    favoriteMovie.putMovie({ id: 'uewq1zg2zlskfw1e867', name: 'Kafein' });

    expect(await favoriteMovie.searchMovies('Melting Pot')).toEqual([
      { id: 'rqdv5juczeskfw1e867', name: 'Melting Pot' },
      { id: 'w9pga3s2tubkfw1e867', name: 'Bring Your Phone Cafe' },
      { id: 'uewq1zg2zlskfw1e867', name: 'Kafein' },
    ]);
  });
};

export { itActsAsFavoriteMovieModel };
