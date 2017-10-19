const favoritesFetcher = newFavorite => {
  return fetch('/api/users/favorites/new', {
    method: 'POST',
    body: JSON.stringify(newFavorite),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resJson => resJson.id);
};

export default favoritesFetcher;
