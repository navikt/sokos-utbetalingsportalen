const isProduction = window.location.href.includes("okonomiportalen.intern.nav.no");
const isDevelopment = window.location.href.includes("dev.intern.nav.no");

export const getEnvironment = (): string => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};
