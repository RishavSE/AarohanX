import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { InternshipCard } from '@/components/internship-card';
import { useLanguage } from '@/hooks/use-language';
import { mockInternships, skillsList, interestsList } from '@/mock/internships';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Sparkles, Target, Lightbulb } from 'lucide-react';

export default function Dashboard() {
  const { t } = useLanguage();
  const [selectedSkills, setSelectedSkills] = useLocalStorage<string[]>('selectedSkills', []);
  const [selectedInterests, setSelectedInterests] = useLocalStorage<string[]>('selectedInterests', []);
  const [location, setLocation] = useState('');
  const [remoteOption, setRemoteOption] = useState(false);
  const [recommendations, setRecommendations] = useState<typeof mockInternships>([]);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const generateRecommendations = () => {
    // Filter internships based on selected criteria
    let filteredInternships = mockInternships.filter(internship => {
      // Check skills match
      const skillMatch = selectedSkills.length === 0 || selectedSkills.some(skill => 
        internship.skills.includes(skill)
      );
      
      // Check interests match
      const interestMatch = selectedInterests.length === 0 || 
        selectedInterests.some(interest => 
          internship.interests.includes(interest)
        );
      
      // Check location match
      const locationMatch = !location || 
        internship.location.toLowerCase().includes(location.toLowerCase()) ||
        (remoteOption && internship.location === 'Remote');
      
      return skillMatch && interestMatch && locationMatch;
    });
    
    // If no matches, show a subset of internships
    if (filteredInternships.length === 0) {
      filteredInternships = mockInternships.slice(0, 3);
    }
    
    setRecommendations(filteredInternships.slice(0, 5));
    setShowRecommendations(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateRecommendations();
  };

  return (
    <main className="min-h-screen pb-20 md:pb-4" data-testid="dashboard-page">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="dashboard-title">
            {t('student_dashboard')}
          </h1>
          <p className="text-muted-foreground" data-testid="dashboard-description">
            {t('dashboard_desc')}
          </p>
        </div>

        {/* Input Form */}
        <Card className="mb-8" data-testid="profile-form-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              {t('tell_about_yourself')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Skills Selection */}
              <div>
                <Label className="text-sm font-medium mb-2" data-testid="label-skills">
                  {t('skills_label')}
                </Label>
                <div className="flex flex-wrap gap-2 mt-2" data-testid="skills-container">
                  {skillsList.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors"
                      onClick={() => toggleSkill(skill)}
                      data-testid={`skill-tag-${skill.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Interests Selection */}
              <div>
                <Label className="text-sm font-medium mb-2" data-testid="label-interests">
                  {t('interests_label')}
                </Label>
                <div className="flex flex-wrap gap-2 mt-2" data-testid="interests-container">
                  {interestsList.map((interest) => (
                    <Badge
                      key={interest}
                      variant={selectedInterests.includes(interest) ? "default" : "secondary"}
                      className="cursor-pointer hover:bg-primary/80 transition-colors"
                      onClick={() => toggleInterest(interest)}
                      data-testid={`interest-tag-${interest.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Location Input */}
              <div>
                <Label htmlFor="location" className="text-sm font-medium mb-2" data-testid="label-location">
                  {t('location_label')}
                </Label>
                <div className="space-y-3">
                  <Input
                    id="location"
                    type="text"
                    placeholder={t('location_placeholder')}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    data-testid="input-location"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remote"
                      checked={remoteOption}
                      onCheckedChange={(checked) => setRemoteOption(checked === true)}
                      data-testid="checkbox-remote"
                    />
                    <Label htmlFor="remote" className="text-sm" data-testid="label-remote">
                      {t('remote_option')}
                    </Label>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full font-semibold"
                data-testid="button-get-recommendations"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {t('get_recommendations')}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Recommendations Section */}
        {showRecommendations && (
          <div data-testid="recommendations-section">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold" data-testid="recommendations-title">
                {t('recommended_for_you')}
              </h2>
              <Badge className="bg-primary/10 text-primary" data-testid="badge-ai-matched">
                <Sparkles className="mr-1 h-3 w-3" />
                {t('ai_matched')}
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="recommendation-cards">
              {recommendations.map((internship) => (
                <InternshipCard 
                  key={internship.id} 
                  internship={internship} 
                  showRecommendation={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {!showRecommendations && (
          <div className="text-center py-12" data-testid="empty-state">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2" data-testid="empty-state-title">
              {t('ready_to_find')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto" data-testid="empty-state-description">
              {t('fill_profile')}
            </p>
            <Card className="bg-muted/50 max-w-md mx-auto">
              <CardContent className="p-4">
                <h4 className="font-medium mb-2 flex items-center justify-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" />
                  {t('pro_tips')}
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li data-testid="tip-1">{t('tip_1')}</li>
                  <li data-testid="tip-2">{t('tip_2')}</li>
                  <li data-testid="tip-3">{t('tip_3')}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}
