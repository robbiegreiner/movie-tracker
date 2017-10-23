const userDataFetcher = userObj => {
  return fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(userObj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(resJson => resJson.data);
};

export default userDataFetcher;
