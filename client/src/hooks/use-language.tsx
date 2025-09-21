import { useLocalStorage } from './use-local-storage';
import { translations } from '../mock/locales';

export function useLanguage() {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage('currentLanguage', 'en');

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  return {
    currentLanguage,
    setCurrentLanguage,
    t
  };
}
