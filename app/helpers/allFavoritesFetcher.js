const allFavoritesFetcher = user_id => {
  return fetch(`/api//users/${user_id}/favorites`);
};

export default allFavoritesFetcher;
