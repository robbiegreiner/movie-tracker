const deleteFaveFetcher = (userId, movie) => {
  fetch(`api/users/${userId}/favorites/${movie.movie_id}`, {
    method: 'DELETE',
    body: JSON.stringify([userId, movie.movie_id]),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export default deleteFaveFetcher;
