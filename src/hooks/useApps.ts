import { useAuthContext } from "../auth/userAuth";
import {
  AzureAdGroupNameId,
  MicrofrontendApp,
  MicrofrontendConfig,
} from "../config/microfrontend";
import { getEnvironment } from "../utils/environment";

export default function useApps() {
  const authContext = useAuthContext();
  const authorizedApps = MicrofrontendConfig.filter((app) =>
    hasAccess(app.group),
  );
  const allApps = [
    ...authorizedApps,
    ...MicrofrontendConfig.filter((app) => !hasAccess(app.group)).filter(
      (app) => !hideApp(app),
    ),
  ];

  function hasAccess(group: string) {
    return authContext.userData.adGroups.some(
      (id) => id === AzureAdGroupNameId(group),
    );
  }

  function hideApp(app: MicrofrontendApp) {
    return app.onlyLocalDev && getEnvironment() === "local";
  }

  return { authorizedApps, allApps };
}
