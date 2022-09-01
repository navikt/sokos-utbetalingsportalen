const isProduction = window.location.href.includes("www.okonomiportalen.intern.nav.no");
const isDevelopment = window.location.href.includes("www.okonomiportalen.dev.intern.nav.no");

export const getEnvironment = () => {
  if (isProduction) {
    return "production";
  }

  if (isDevelopment) {
    return "development";
  }

  return "local";
};
