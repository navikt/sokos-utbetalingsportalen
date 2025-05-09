import React, { type ErrorInfo } from "react";
import Error from "./Error";

//import { logFaroError } from "../../utils/grafanaFaro";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //logFaroError(error);
    this.setState({ hasError: true, error, errorInfo });
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <Error />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
