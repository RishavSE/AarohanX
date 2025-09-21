import { useLanguage } from '@/hooks/use-language';
import { languageOptions } from '@/mock/locales';

export function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xs text-muted-foreground" data-testid="text-initiative">
          {t('initiative_tagline')}
        </div>
        <select 
          value={currentLanguage}
          onChange={(e) => setCurrentLanguage(e.target.value)}
          className="text-xs bg-transparent border border-border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-ring"
          data-testid="select-language"
        >
          {languageOptions.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
