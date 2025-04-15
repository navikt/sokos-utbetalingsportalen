import { getServerSideEnvironment } from "./environment";

type AdGroup = {
  adGroupDevelopment: string;
  adGroupProduction: string;
};

export function fetchMicrofrontendBundleUrl(appName: string) {
  if (getServerSideEnvironment() === "local") {
    return "/bundle.js";
  }
  return (
    "https://" +
    process.env.UTBETALINGSPORTALEN_URL +
    "/" +
    appName +
    "/bundle.js"
  );
}

export function fetchMicrofrontendAdGroup({
  adGroupDevelopment,
  adGroupProduction,
}: AdGroup) {
  return getServerSideEnvironment() === "production"
    ? adGroupProduction
    : adGroupDevelopment;
}
