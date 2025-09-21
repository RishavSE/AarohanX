import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 border-t border-border py-8 mt-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-6 h-4 bg-gradient-to-b from-orange-500 via-white to-green-600 border border-gray-300 rounded-sm" data-testid="footer-flag" />
              <h3 className="font-bold text-lg">AI Internship Portal</h3>
            </div>
            <p className="text-muted-foreground mb-4" data-testid="footer-description">
              {t('footer_desc')}
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center" data-testid="social-twitter">
                <i className="fab fa-twitter text-muted-foreground"></i>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center" data-testid="social-linkedin">
                <i className="fab fa-linkedin text-muted-foreground"></i>
              </div>
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center" data-testid="social-youtube">
                <i className="fab fa-youtube text-muted-foreground"></i>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('quick_links')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-about">{t('about_us')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-contact">{t('contact')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">{t('privacy_policy')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">{t('terms_service')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-help">{t('help_center')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('government_links')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-ministry">{t('ministry_it')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-digital-india">{t('digital_india')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-skill-india">{t('skill_india')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-aicte">{t('aicte')}</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors" data-testid="link-india-gov">{t('india_gov')}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
