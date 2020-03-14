import moment from "moment";
import { isNil, isEmpty, has } from "ramda";

export const saveSessionData = params => {
  sessionStorage.setItem("at", params.access_token);
  sessionStorage.setItem("tt", params.token_type);
  sessionStorage.setItem("ei", params.expires_in);
  sessionStorage.setItem("ea", moment().add(Number(params.expires_in), "s"));
};

export const checkSessionData = () => {
  const expireAt = sessionStorage.getItem("ea");
  const accesToken = sessionStorage.getItem("at");
  const tokenType = sessionStorage.getItem("tt");
  return (
    !isNil(expireAt) &&
    !isNil(accesToken) &&
    !isNil(tokenType) &&
    moment(expireAt).isValid() &&
    moment().isBefore(expireAt)
  );
};

export const removeSessionData = () => {
  sessionStorage.removeItem("at");
  sessionStorage.removeItem("tt");
  sessionStorage.removeItem("ei");
  sessionStorage.removeItem("ea");
};

export const checkSessionDataParams = params => {
  return (
    !isNil(params) &&
    !isEmpty(params) &&
    has("access_token", params) &&
    has("token_type", params) &&
    has("expires_in", params)
  );
};

export const getAuthorization = () =>
  `${sessionStorage.getItem("tt")} ${sessionStorage.getItem("at")}`;
