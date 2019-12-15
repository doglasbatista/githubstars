const getAccessToken = () => localStorage.getItem('auth-token');

const setAccessToken = personalToken =>
  localStorage.setItem('auth-token', personalToken);

export { getAccessToken, setAccessToken };
