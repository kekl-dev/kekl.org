import { useState } from '#app'

export type Language = 'id' | 'en'

export const useLanguage = () => {
  const currentLang = useState<Language>('language', () => 'id')

  const t = (key: string) => {
    const keys = key.split('.')
    // @ts-ignore
    let current: any = translations[currentLang.value]
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k]
      } else {
        return key
      }
    }
    return current
  }

  const setLanguage = (lang: Language) => {
    currentLang.value = lang
  }

  return {
    currentLang,
    t,
    setLanguage
  }
}
