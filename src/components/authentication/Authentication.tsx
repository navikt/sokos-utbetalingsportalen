import React, { type PropsWithChildren } from "react";
import { fetcher } from "../../api/api";
import { sokosLoginApiUrl } from "../../urls";
import ContentLoader from "../loader/ContentLoader";
import useSWR from "swr";
import Login from "../../pages/Login";
import useStore, { selectIsLoggedIn } from "../../store/store";

const Authentication = ({ children }: PropsWithChildren) => {
  const isLoggedIn = useStore(selectIsLoggedIn);
  const { data, isLoading, error } = useSWR(sokosLoginApiUrl, fetcher, { shouldRetryOnError: false });

  if (isLoading) {
    return <ContentLoader />;
  }

  /*   if (!isLoggedIn && (!data || !data.authenticated || error)) {
    return <Login />;
  } */

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
