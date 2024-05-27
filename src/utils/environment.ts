const isProduction =
  window.location.href.includes("intern.nav.no") ||
  window.location.href.includes("ansatt.nav.no");
const isDevelopment =
  window.location.href.includes("intern.dev.nav.no") ||
  window.location.href.includes("ansatt.dev.nav.no");

type Environment = "nais" | "local";

export const getEnvironment = (): Environment => {
  if (isProduction && isDevelopment) {
    return "nais";
  }
  return "local";
};
