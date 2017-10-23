const allFavoritesFetcher = user_id => {
  return fetch(`/api//users/${user_id}/favorites`)
    .then(res => res.json());
};

export default allFavoritesFetcher;
