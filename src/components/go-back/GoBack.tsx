import { useCallback } from "react";
import { Link } from "@navikt/ds-react";

interface GoBackProps {
  fallbackUrl?: string;
  children: React.ReactNode;
}

export default function GoBack({ fallbackUrl = "/", children }: GoBackProps) {
  const handleGoBack = useCallback(() => {
    if (window.history.length > 2) {
      window.history.back();
    } else {
      window.location.href = fallbackUrl;
    }
  }, [fallbackUrl]);

  return (
    <Link
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleGoBack();
      }}
    >
      {children}
    </Link>
  );
}
