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

type ApplicationEnvironment = "Q1" | "QX";

export function getApplicationEnvrionment(): ApplicationEnvironment {
  if (window.location.href.includes("qx")) {
    return "QX";
  }
  return "Q1";
}
