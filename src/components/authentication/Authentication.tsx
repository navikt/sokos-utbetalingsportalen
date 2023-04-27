import React, { type PropsWithChildren, useEffect } from "react";
import { fetcher } from "../../api/api";
import ContentLoader from "../loader/ContentLoader";
import useSWR from "swr";
import useStore, { selectSetUserInfo, selectUserInfo } from "../../store/store";
import Feilside from "../../pages/Feilside";
import { authUrl } from "../../urls";

const Authentication = ({ children }: PropsWithChildren) => {
  const setUserInfo = useStore(selectSetUserInfo);
  const userInfo = useStore(selectUserInfo);

  const { data, isLoading, error } = useSWR(authUrl, fetcher, { shouldRetryOnError: false });

  useEffect(() => {
    setUserInfo({ ...data.brukerInformasjon });
  }, [data]);

  if (isLoading) {
    return <ContentLoader />;
  }

  if (!userInfo || error) {
    return <Feilside tittel={"Feil ved innlogging"} melding={"Vi greide ikke å logge deg inn"} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
