import { useLanguage } from "@/hooks/use-language";

export function Header() {
  const { t } = useLanguage();

  return (
    <header
      className="govt-banner text-white py-2 px-4 shadow-lg"
      data-testid="header-banner"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/internship.png"
            alt="Ministry Logo"
            className="w-26 h-14 object-fill"
            data-testid="ministry-logo"
          />
          {/* Indian Flag */}
          <div className="w-12 h-6 relative" data-testid="indian-flag">
            <img
              src="/flag.png"
              alt="Indian Flag"
              className="object-cover shadow-sm border border-gray-300"
            />
          </div>
          <span className="text-sm font-medium" data-testid="text-gov-india">
            {t("gov_of_india")}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Ministry logos placeholder */}
          <img
            src="/MAC.jpg"
            alt="Ministry Logo"
            className="w-26 h-14 object-fill"
          />

          {/* 
          <div className="hidden sm:block text-xs" data-testid="ministry-text">
            <div>{t('ministry_name').split('&')[0]}&</div>
            <div>{t('ministry_name').split('&')[1]}</div>
          </div> */}
        </div>
      </div>
    </header>
  );
}
