import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/hooks/use-language';
import { useIsMobile } from '@/hooks/use-mobile';
import { mockNotifications } from '@/mock/notifications';

export function Navigation() {
  const [location] = useLocation();
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  const unreadCount = mockNotifications.filter(n => n.unread).length;

  const navItems = [
    { path: '/', label: t('home'), icon: 'fas fa-home', mobileIcon: 'fas fa-home' },
    { path: '/dashboard', label: t('dashboard'), icon: 'fas fa-tachometer-alt', mobileIcon: 'fas fa-tachometer-alt' },
    { path: '/awareness', label: t('guidance'), icon: 'fas fa-lightbulb', mobileIcon: 'fas fa-lightbulb' },
    { path: '/notifications', label: t('notifications'), icon: 'fas fa-bell', mobileIcon: 'fas fa-bell', badge: unreadCount },
    { path: '/profile', label: t('profile'), icon: 'fas fa-user-circle', mobileIcon: 'fas fa-user-circle' }
  ];

  if (isMobile) {
    return (
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50" data-testid="mobile-navigation">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 4).map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex flex-col items-center p-2 text-xs space-y-1 transition-colors ${
                location === item.path ? 'text-primary' : 'text-muted-foreground'
              }`}
              data-testid={`mobile-nav-${item.path.replace('/', '') || 'home'}`}
            >
              <div className="relative">
                <i className={`${item.mobileIcon} text-lg`}></i>
                {item.badge && item.badge > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </div>
              <span>{item.path === '/notifications' ? t('alerts') : item.label}</span>
            </Link>
          ))}
          <Link 
            href="/profile"
            className={`flex flex-col items-center p-2 text-xs space-y-1 transition-colors ${
              location === '/profile' ? 'text-primary' : 'text-muted-foreground'
            }`}
            data-testid="mobile-nav-profile"
          >
            <i className="fas fa-user-circle text-lg"></i>
            <span>{t('profile')}</span>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className="hidden md:block nav-blur border-b border-border sticky top-0 z-40" data-testid="desktop-navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <i className="fas fa-brain text-primary text-xl"></i>
            <h1 className="font-bold text-lg">AI Internship Portal</h1>
          </div>
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                  location === item.path ? 'bg-accent text-accent-foreground' : ''
                }`}
                data-testid={`desktop-nav-${item.path.replace('/', '') || 'home'}`}
              >
                <i className={`${item.icon} mr-1`}></i>
                {item.label}
                {item.badge && item.badge > 0 && (
                  <span className="ml-1 bg-primary text-primary-foreground text-xs rounded-full px-1">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
