import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

interface Props {
  children: ReactNode;
}

export function ErrorBoundary({ children }: Props) {
  const location = useLocation();
  return (
    <ReactErrorBoundary
      FallbackComponent={() => <ErrorPage />}
      key={location.pathname}
    >
      {children}
    </ReactErrorBoundary>
  );
}
