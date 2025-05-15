import { getServerSideEnvironment } from "./environment";

export function fetchMicrofrontendBundleUrl(appName: string) {
  if (getServerSideEnvironment() === "local") {
    return "http://localhost:3000/bundle.js";
  }
  return (
    "https://" +
    process.env.UTBETALINGSPORTALEN_URL +
    "/" +
    appName +
    "/bundle.js"
  );
}
