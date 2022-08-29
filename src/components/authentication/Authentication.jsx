import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import redirectToIdPorten from "../../api/redirect";
import { authenticationUrl, baseUrl } from "../../urls";
import ContentLoader from "../loader/ContentLoader";

const Authentication = ({ children }) => {
  const { data: status, isLoading: isLoadingStatus, isError } = useQuery(authenticationUrl, fetcher);

  const redirectUrl = baseUrl + window.location.pathname;

  if (isLoadingStatus) {
    return <ContentLoader size="2xlarge">...</ContentLoader>;
  }

  if (!status?.authenticated || isError) {
    redirectToIdPorten(redirectUrl);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
