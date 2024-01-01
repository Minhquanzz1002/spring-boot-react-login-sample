const keys = require("../config/keys");
export const API_BASE_URL = keys.apiBaseUrl;
export const API_LOGIN = API_BASE_URL + "/api/v1/auth/login";
export const OAUTH2_REDIRECT_URI = keys.redirectUri;
export const GOOGLE_AUTH_URL = API_BASE_URL + "/api/oauth2/authorization/google?redirect_uri=" + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + "/api/oauth2/authorization/github?redirect_uri=" + OAUTH2_REDIRECT_URI;
