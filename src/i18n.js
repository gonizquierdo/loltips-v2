export const t = (key: string) => {
  // const locale = (navigator.language || navigator.userLanguage).split('-')[0]

  // TODO: Language forced to English while deciding what to do with translations.
  const locale = 'en'
  const messages = require(`./locales/${locale}/translation.json`)
  const message = messages[key]
  if (typeof message === 'undefined') {
    // eslint-disable-next-line no-console
    console.error(`Could not find Intl message: ${key}`)
    return key
  }

  return message
}
