const getAccessToken = () => sessionStorage.getItem('auth-token');

const setAccessToken = personalToken =>
  sessionStorage.setItem('auth-token', personalToken);

const destroyAccessToken = () => sessionStorage.removeItem('auth-token');

export { getAccessToken, setAccessToken, destroyAccessToken };
