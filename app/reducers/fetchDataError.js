const fetchDataError = (state = false, action) => {
  switch (action.type) {
  case "FETCH_DATA_ERROR":
    return action.fetchDataError;
  default:
    return state;
  }
};

export default fetchDataError;
