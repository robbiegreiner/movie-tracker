const allFavoritesFetcher = user_id => {
  return fetch(`/api//users/${user_id}/favorites`)
  //   method: 'GET',
  //   body: JSON.stringify({user_id}),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
    .then(res => res.json())
    // .then(resJson => resJson.id);
};

export default allFavoritesFetcher;
