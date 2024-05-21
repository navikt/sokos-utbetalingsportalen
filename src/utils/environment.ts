const isProduction = window.location.href.includes("nav.no");
const isDevelopment = /.*\.dev\.nav\.no/.test(window.location.href);

type Environment = "production" | "development" | "local";

export const getEnvironment = (): Environment => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};
