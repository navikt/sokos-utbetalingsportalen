import { sokosAuthUrl } from '../urls'

const redirectToIdPorten = (redirectUrl: string): void => {
  window.location.assign(`${sokosAuthUrl}/login?redirect_uri=${redirectUrl}${window.location.search}`)
}

export default redirectToIdPorten
