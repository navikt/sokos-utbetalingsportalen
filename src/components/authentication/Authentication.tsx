import React, { type PropsWithChildren } from "react";
import { fetcher } from "../../api/api";
import redirectToIdPorten from "../../api/redirectToIdPorten";
import { sokosAuthUrl, baseUrl } from "../../urls";
import ContentLoader from "../loader/ContentLoader";
import useSWR from "swr";

const Authentication = ({ children }: PropsWithChildren) => {
  const { data, isLoading, error } = useSWR(sokosAuthUrl, fetcher);

  const redirectUrl = baseUrl + window.location.pathname;

  if (isLoading) {
    return <ContentLoader />;
  }

  if (!data || !data.authenticated || error) {
    redirectToIdPorten(redirectUrl);
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
