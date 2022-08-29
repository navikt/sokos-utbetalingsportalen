import { sokosOkonomiportalenProxy } from "../urls";

const redirectToIdPorten = (redirectUrl) => {
  window.location.assign(`${sokosOkonomiportalenProxy}/login?redirect_uri=${redirectUrl}${window.location.search}`);
};

export default redirectToIdPorten;
