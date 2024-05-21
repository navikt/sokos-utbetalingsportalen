const isProduction = window.location.href.includes("nav.no");
const isDevelopment = window.location.href.includes("dev.nav.no");

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
