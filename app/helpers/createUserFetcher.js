const createUserFetcher = userObj => {
  console.log('in helper', userObj)
  return fetch('/api/users/new', {
    method: 'POST',
    body: JSON.stringify(userObj),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export default createUserFetcher;
