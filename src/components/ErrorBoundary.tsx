import { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import ErrorPage from "../pages/ErrorPage";

interface Props {
  children: ReactNode;
}

export function ErrorBoundary({ children }: Props) {
  return (
    <ReactErrorBoundary FallbackComponent={() => <ErrorPage />}>
      {children}
    </ReactErrorBoundary>
  );
}
