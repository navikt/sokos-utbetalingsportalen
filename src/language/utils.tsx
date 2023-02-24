import Cookies from 'js-cookie'

export const getLanguageFromCookie = (): string => {
  const language = Cookies.get('decorator-language')

  return language ?? 'nb'
}
