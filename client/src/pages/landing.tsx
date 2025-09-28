import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/hooks/use-language';
import { useLocation } from 'wouter';
import { Shield, Bot, Users, Target, Database, TrendingUp, Globe } from 'lucide-react';

export default function Landing() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();

  const handleFindInternship = () => {
    setLocation('/dashboard');
  };

  const stats = [
    { value: '500+', label: 'Active Companies' },
    { value: '10,000+', label: 'Internships Posted' },
    { value: '95%', label: 'Success Rate' },
    { value: '13', label: 'Indian Languages' }
  ];

  const features = [
    {
      icon: Shield,
      title: t('verified_internships'),
      description: t('verified_desc'),
      color: 'verified-badge'
    },
    {
      icon: Bot,
      title: t('ai_matching'),
      description: t('ai_desc'),
      color: 'bg-blue-600'
    },
    {
      icon: Users,
      title: t('student_count'),
      description: t('student_desc'),
      color: 'bg-orange-600'
    }
  ];

  return (
    <main className="min-h-screen" data-testid="landing-page">
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20" data-testid="hero-section">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
              {t('hero_title_1')}<br />
              <span className="text-primary">{t('hero_title_2')}</span><br />
              {t('hero_title_3')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="hero-description">
              {t('hero_description')}
            </p>
            <Button 
              size="lg"
              onClick={handleFindInternship}
              className="font-semibold py-4 px-8 text-lg shadow-lg hover:shadow-xl transition-all duration-200"
              data-testid="button-find-internship"
            >
              <Target className="mr-2 h-5 w-5" />
              {t('find_internship')}
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-16 bg-card" data-testid="trusted-section">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12" data-testid="trusted-title">
            {t('trusted_nationwide')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center" data-testid={`feature-${index}`}>
                <div className={`${feature.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center`}>
                  <feature.icon className="text-white h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted/50" data-testid="stats-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-testid={`stat-${index}`}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 bg-card" data-testid="additional-features">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of internship matching with our AI-powered platform designed specifically for Indian students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Database className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Comprehensive Database</h3>
                <p className="text-muted-foreground text-sm">
                  Access thousands of verified internships from top companies across India
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Career Growth</h3>
                <p className="text-muted-foreground text-sm">
                  Track your progress and build a strong professional profile
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Multilingual Support</h3>
                <p className="text-muted-foreground text-sm">
                  Available in 13 Indian languages for better accessibility
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
