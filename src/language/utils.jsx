import Cookies from "js-cookie";

export const getLanguageFromCookie = () => {
  const language = Cookies.get("decorator-language");

  return language ? language : "nb";
};
