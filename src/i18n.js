export const t = (key: string) => {

  const locale = (navigator.language || navigator.userLanguage || 'en_us').split('-')[0]
  const messages = require(`./locales/${locale}/translation.json`)
  const message = messages[key]
  if (typeof message === 'undefined') {
    // eslint-disable-next-line no-console
    console.error(`Could not find Intl message: ${key}`)
    return key
  }

  return message
}

export const locale  = () => {
  return (navigator.language || navigator.userLanguage || 'en_us').split('-')[0]
}
