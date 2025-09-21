import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { mockNotifications } from '@/mock/notifications';
import { useLocation } from 'wouter';
import { 
  Target, 
  GraduationCap, 
  FileText, 
  Bell,
  Clock,
  ExternalLink
} from 'lucide-react';

export default function Notifications() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'match':
        return Target;
      case 'workshop':
        return GraduationCap;
      case 'application':
        return FileText;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'match':
        return 'text-primary';
      case 'workshop':
        return 'text-blue-600';
      case 'application':
        return 'text-green-600';
      default:
        return 'text-muted-foreground';
    }
  };

  const handleNotificationClick = (notification: typeof mockNotifications[0]) => {
    if (notification.actionUrl) {
      setLocation(notification.actionUrl);
    }
  };

  if (mockNotifications.length === 0) {
    return (
      <main className="min-h-screen pb-20 md:pb-4" data-testid="notifications-page-empty">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="notifications-title">
              {t('notifications_title')}
            </h1>
            <p className="text-muted-foreground" data-testid="notifications-description">
              {t('notifications_desc')}
            </p>
          </div>

          <div className="text-center py-12" data-testid="empty-state-notifications">
            <div className="text-6xl mb-4">🔔</div>
            <h3 className="text-xl font-semibold mb-2" data-testid="empty-state-title">
              {t('no_notifications')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto" data-testid="empty-state-description">
              {t('no_notif_desc')}
            </p>
            <Button 
              onClick={() => setLocation('/dashboard')}
              data-testid="button-go-to-dashboard"
            >
              {t('go_to_dashboard')}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-20 md:pb-4" data-testid="notifications-page">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="notifications-title">
            {t('notifications_title')}
          </h1>
          <p className="text-muted-foreground" data-testid="notifications-description">
            {t('notifications_desc')}
          </p>
        </div>

        <div className="space-y-4" data-testid="notifications-list">
          {mockNotifications.map((notification) => {
            const IconComponent = getNotificationIcon(notification.type);
            const iconColor = getNotificationColor(notification.type);
            
            return (
              <Card 
                key={notification.id} 
                className={`transition-all duration-200 hover:shadow-md cursor-pointer ${
                  notification.unread ? 'border-l-4 border-l-primary bg-primary/5' : ''
                }`}
                onClick={() => handleNotificationClick(notification)}
                data-testid={`notification-${notification.id}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <IconComponent className={`h-5 w-5 ${iconColor}`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-medium truncate ${
                          notification.unread ? 'text-foreground' : 'text-muted-foreground'
                        }`} data-testid={`notification-title-${notification.id}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            <span data-testid={`notification-time-${notification.id}`}>
                              {notification.time}
                            </span>
                          </div>
                          {notification.actionUrl && (
                            <ExternalLink className="h-3 w-3 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground" data-testid={`notification-message-${notification.id}`}>
                        {notification.message}
                      </p>
                      
                      {/* Notification type badge */}
                      <div className="mt-2">
                        <Badge 
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`notification-type-${notification.id}`}
                        >
                          {notification.type === 'match' && 'Internship Match'}
                          {notification.type === 'workshop' && 'Workshop'}
                          {notification.type === 'application' && 'Application Update'}
                          {notification.type === 'update' && 'Platform Update'}
                        </Badge>
                      </div>
                    </div>
                    {notification.unread && (
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" data-testid={`notification-unread-${notification.id}`} />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="mt-8 p-4 bg-muted/50 rounded-lg" data-testid="notifications-summary">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {mockNotifications.filter(n => n.unread).length} unread notifications
            </span>
            <Button variant="ghost" size="sm" className="text-primary">
              Mark all as read
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
