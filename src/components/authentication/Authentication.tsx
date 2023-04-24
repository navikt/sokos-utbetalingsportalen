import React, { useEffect, type PropsWithChildren } from "react";
import { fetcher } from "../../api/api";
import ContentLoader from "../loader/ContentLoader";
import useSWR from "swr";
import useStore, { selectSetUserInfo, selectUserInfo } from "../../store/store";
import FeilMelding from "../feilmelding/Feilmelding";
import { Path } from "../../models/path";

const Authentication = ({ children }: PropsWithChildren) => {
  const setUserInfo = useStore(selectSetUserInfo);
  const userInfo = useStore(selectUserInfo);

  const { data, isLoading, error } = useSWR(Path.BRUKER_IDENT, fetcher, { shouldRetryOnError: false });

  console.log("DETTE FÅR VI UT ::: ", data);

  useEffect(() => {
    setUserInfo({ ...data });
  }, [data]);

  if (isLoading) {
    return <ContentLoader />;
  }

  if (!userInfo || error) {
    return <FeilMelding feilmelding={error.message} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default Authentication;
