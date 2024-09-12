const isProduction =
  window.location.href.includes("intern.nav.no") ||
  window.location.href.includes("ansatt.nav.no");
const isDevelopment =
  window.location.href.includes("intern.dev.nav.no") ||
  window.location.href.includes("ansatt.dev.nav.no");

type Environment = "production" | "development" | "local";

export function getEnvironment(): Environment {
  if (isProduction) {
    return "production";
  }
  if (isDevelopment) {
    return "development";
  }
  return "local";
}
