import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/use-language';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { 
  GraduationCap, 
  FileText, 
  Handshake, 
  Network,
  BookOpen,
  Lightbulb,
  Bell
} from 'lucide-react';

export default function Awareness() {
  const { t } = useLanguage();
  const [workshopNotifications, setWorkshopNotifications] = useLocalStorage('workshopNotifications', true);

  const guidanceCards = [
    {
      icon: GraduationCap,
      title: t('career_workshops'),
      description: 'Interactive sessions on career planning, industry insights, and skill development',
      gradient: 'from-blue-500 to-purple-600',
      status: 'Next: Dec 15',
      statusColor: 'bg-blue-100 text-blue-800',
      action: t('learn_more')
    },
    {
      icon: FileText,
      title: t('resume_tips'),
      description: 'Expert guidance on crafting compelling resumes that get noticed by recruiters',
      gradient: 'from-green-500 to-emerald-600',
      status: t('available_now'),
      statusColor: 'bg-green-100 text-green-800',
      action: t('start_guide')
    },
    {
      icon: Handshake,
      title: t('interview_prep'),
      description: 'Mock interviews, common questions, and techniques to ace your internship interviews',
      gradient: 'from-orange-500 to-red-500',
      status: t('book_session'),
      statusColor: 'bg-orange-100 text-orange-800',
      action: t('get_started')
    },
    {
      icon: Network,
      title: 'Networking Events',
      description: 'Connect with industry professionals and expand your professional network',
      gradient: 'from-purple-500 to-indigo-600',
      status: t('monthly'),
      statusColor: 'bg-purple-100 text-purple-800',
      action: t('join_now')
    },
    {
      icon: BookOpen,
      title: 'Skill Development',
      description: 'Free online courses and certifications to boost your technical and soft skills',
      gradient: 'from-teal-500 to-cyan-600',
      status: '50+ Courses',
      statusColor: 'bg-teal-100 text-teal-800',
      action: t('browse')
    },
    {
      icon: Lightbulb,
      title: 'Success Stories',
      description: 'Read inspiring stories from students who found their dream internships',
      gradient: 'from-pink-500 to-rose-600',
      status: '100+ Stories',
      statusColor: 'bg-pink-100 text-pink-800',
      action: t('read')
    }
  ];

  return (
    <main className="min-h-screen pb-20 md:pb-4" data-testid="awareness-page">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="awareness-title">
            {t('career_guidance')}
          </h1>
          <p className="text-muted-foreground" data-testid="awareness-description">
            {t('guidance_desc')}
          </p>
        </div>

        {/* Notification Toggle */}
        <Card className="mb-8" data-testid="notification-settings-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <Label className="font-medium" data-testid="notification-title">
                    {t('workshop_notifications')}
                  </Label>
                  <p className="text-sm text-muted-foreground" data-testid="notification-description">
                    {t('workshop_notif_desc')}
                  </p>
                </div>
              </div>
              <Switch
                checked={workshopNotifications}
                onCheckedChange={setWorkshopNotifications}
                data-testid="switch-workshop-notifications"
              />
            </div>
          </CardContent>
        </Card>

        {/* Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="guidance-cards">
          {guidanceCards.map((card, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-md transition-shadow group"
              data-testid={`guidance-card-${index}`}
            >
              {/* Card illustration */}
              <div className={`h-48 bg-gradient-to-br ${card.gradient} flex items-center justify-center relative overflow-hidden`}>
                <card.icon className="text-white h-16 w-16 z-10" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2" data-testid={`card-title-${index}`}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`card-description-${index}`}>
                  {card.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge className={`${card.statusColor} text-xs`} data-testid={`card-status-${index}`}>
                    {card.status}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80 font-medium"
                    data-testid={`button-card-action-${index}`}
                  >
                    {card.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16" data-testid="additional-resources">
          <h2 className="text-xl font-semibold mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Free Learning Resources</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Access curated learning materials, tutorials, and practice tests to enhance your skills.
                  </p>
                  <Button variant="outline" size="sm">Explore Resources</Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-600 rounded-lg">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Mentorship Program</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Connect with industry mentors who can guide you through your internship journey.
                  </p>
                  <Button variant="outline" size="sm">Find a Mentor</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
