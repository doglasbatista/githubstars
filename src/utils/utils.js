const getAccessToken = () => localStorage.getItem('auth-token');

const setAccessToken = personalToken =>
  localStorage.setItem('auth-token', personalToken);

const destroyAccessToken = () => localStorage.removeItem('auth-token');

export { getAccessToken, setAccessToken, destroyAccessToken };
