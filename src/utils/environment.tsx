const isProduction = window.location.href.includes("intern.nav.no");
const isDevelopment = window.location.href.includes("intern.dev.nav.no");

type Environment = "local" | "development" | "production";

export const getEnvironment = (): Environment => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};
