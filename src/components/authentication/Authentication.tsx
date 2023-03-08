import React, { type PropsWithChildren } from "react";
import { useQuery } from "react-query";
import { fetcher } from "../../api/api";
import redirectToIdPorten from "../../api/redirectToIdPorten";
import { sokosAuthUrl, baseUrl } from "../../urls";
import ContentLoader from "../loader/ContentLoader";

const Authentication = ({ children }: PropsWithChildren) => {
  const {
    data: status,
    isLoading: isLoadingStatus,
    isError,
  } = useQuery<{ authenticated: boolean }, boolean>(sokosAuthUrl, fetcher);

  const redirectUrl = baseUrl + window.location.pathname;

  if (isLoadingStatus) {
    return <ContentLoader />;
  }

  if (status?.authenticated === undefined || !status?.authenticated || isError) {
    redirectToIdPorten(redirectUrl);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
