import React, { type ErrorInfo, type PropsWithChildren } from 'react'
import withStore from '../../store/withStore'

type ErrorBoundaryProps = {
  store: any
}

type ErrorState = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps & PropsWithChildren, ErrorState> {
  constructor (props: ErrorBoundaryProps & PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (_error: Error): ErrorState {
    return { hasError: true }
  }

  componentDidCatch (_error: Error, _errorInfo: ErrorInfo): void {
    this.props.store.setIsError()
  }

  render (): JSX.Element | null {
    if (this.state.hasError) {
      return null
    }

    return <> {this.props.children} </>
  }
}

export default withStore(ErrorBoundary)
