const favoritesFetcher = newFavorite => {
  return fetch('/users/favorites/new', {
    method: 'POST',
    body: JSON.stringify(newFavorite),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resJson => resJson.data);
};

export default favoritesFetcher;
