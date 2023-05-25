const makeHeaderWithAuth = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export default makeHeaderWithAuth;
