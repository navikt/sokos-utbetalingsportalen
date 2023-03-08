import { getEnvironment } from './api/environment'

const OKONOMIPORTALEN_URL: Record<string, string> = {
  local: 'http://localhost:5173/',
  development: 'https://okonomiportalen.dev.intern.nav.no/okonomiportalen',
  production: 'https://okonomiportalen.intern.nav.no/okonomiportalen'
}

const SOKOS_OP_AUTH_URL: Record<string, string> = {
  local: 'http://localhost:5173/sokos-op-auth',
  development: 'https://okonomiportalen.dev.intern.nav.no/sokos-op-auth',
  production: 'https://okonomiportalen.intern.nav.no/sokos-op-auth'
}

const BASE_URL: Record<string, string> = {
  local: 'http://localhost:5173',
  development: 'https://okonomiportalen.dev.intern.nav.no',
  production: 'https://okonomiportalen.nav.no'
}

const ATTESTASJON_URL: Record<string, string> = {
  local: 'http://localhost:5173/attestasjon/bundle.js',
  development: 'https://okonomiportalen.dev.intern.nav.no/attestasjon/bundle.js',
  production: 'https://okonomiportalen.intern.nav.no/attestasjon/bundle.js'
}

export const okonomiportalenUrl = OKONOMIPORTALEN_URL[getEnvironment()]
export const attestasjonUrl = ATTESTASJON_URL[getEnvironment()]
export const sokosAuthUrl = `${SOKOS_OP_AUTH_URL[getEnvironment()]}/login/status`
export const baseUrl = BASE_URL[getEnvironment()]
