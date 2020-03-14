export const generateUrlAuthenticate = () => {
  const baseUrl = process.env.VUE_APP_BASE_URL_SPOTIFY_AUTHENTICATION;
  const clientId = `client_id=${process.env.VUE_APP_CLIENT_ID}`;
  const responseType = `response_type=${process.env.VUE_APP_RESPONSE_TYPE}`;
  const redirectUri = `redirect_uri=${process.env.VUE_APP_REDIRECT_URI}`;
  const result = `${baseUrl}?${clientId}&${responseType}&${redirectUri}`;
  return encodeURI(result);
};
