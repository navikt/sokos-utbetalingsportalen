import { useEffect } from "react";

const useBackButton = () => {
  useEffect(() => {
    const handleEvent = () => {
      const mikrofrontend = window.location.href
        .split(window.location.hostname)[1]
        ?.split("/")[1];
      const subRoute = window.location.href
        .split(window.location.hostname)[1]
        ?.split("/")[2];

      if (subRoute) window.location.replace(`/${mikrofrontend}`);
      else window.location.replace("/");
    };
    window.addEventListener("popstate", handleEvent);
    return () => window.removeEventListener("popstate", handleEvent);
  }, []);
};

export default useBackButton;
