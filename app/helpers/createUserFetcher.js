const createUserFetcher = userObj => {
  return fetch('/api/users/new', {
    method: 'POST',
    body: JSON.stringify(userObj),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
export default createUserFetcher;
