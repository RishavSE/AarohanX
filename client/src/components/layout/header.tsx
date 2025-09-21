import { useLanguage } from '@/hooks/use-language';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="govt-banner text-white py-2 px-4 shadow-lg" data-testid="header-banner">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Indian Flag representation */}
          <div 
            className="w-8 h-6 bg-gradient-to-b from-orange-500 via-white to-green-600 border border-gray-300 rounded-sm shadow-sm"
            data-testid="indian-flag"
          />
          <span className="text-sm font-medium" data-testid="text-gov-india">
            {t('gov_of_india')}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          {/* Ministry logos placeholder */}
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center" data-testid="ministry-logo">
            <i className="fas fa-university text-xs"></i>
          </div>
          <div className="hidden sm:block text-xs" data-testid="ministry-text">
            <div>{t('ministry_name').split('&')[0]}&</div>
            <div>{t('ministry_name').split('&')[1]}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
