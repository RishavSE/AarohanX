import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/hooks/use-language';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { InternshipCard } from '@/components/internship-card';
import { mockInternships } from '@/mock/internships';
import { languageOptions } from '@/mock/locales';
import { useLocation } from 'wouter';
import { User, Settings, BookmarkIcon } from 'lucide-react';

export default function Profile() {
  const { t, currentLanguage, setCurrentLanguage } = useLanguage();
  const [savedInternships] = useLocalStorage<number[]>('savedInternships', []);
  const [selectedSkills] = useLocalStorage<string[]>('selectedSkills', []);
  const [, setLocation] = useLocation();

  const savedInternshipData = mockInternships.filter(internship => 
    savedInternships.includes(internship.id)
  );

  const mockUserData = {
    name: "Rahul Sharma",
    email: "rahul.sharma@student.ac.in",
    education: "Computer Science Engineering • Final Year",
    university: "Indian Institute of Technology, Delhi"
  };

  return (
    <main className="min-h-screen pb-20 md:pb-4" data-testid="profile-page">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2" data-testid="profile-title">
            {t('profile_title')}
          </h1>
          <p className="text-muted-foreground" data-testid="profile-description">
            {t('profile_desc')}
          </p>
        </div>

        {/* Profile Info */}
        <Card className="mb-8" data-testid="profile-info-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="text-primary h-8 w-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold" data-testid="user-name">
                  {mockUserData.name}
                </h2>
                <p className="text-muted-foreground" data-testid="user-email">
                  {mockUserData.email}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="user-education">
                  {mockUserData.education}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="user-university">
                  {mockUserData.university}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2" data-testid="selected-skills-title">
                  {t('selected_skills')}
                </h3>
                <div className="flex flex-wrap gap-2" data-testid="profile-skills">
                  {selectedSkills.length > 0 ? (
                    selectedSkills.map((skill, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary">
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No skills selected. Go to dashboard to add skills.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium mb-2" data-testid="language-preference-label">
                  {t('language_preference')}
                </Label>
                <select 
                  value={currentLanguage}
                  onChange={(e) => setCurrentLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  data-testid="select-profile-language"
                >
                  {languageOptions.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card className="mb-8" data-testid="account-settings-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <User className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
              <Button variant="outline" className="justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Privacy Settings
              </Button>
              <Button variant="outline" className="justify-start">
                <BookmarkIcon className="mr-2 h-4 w-4" />
                Notification Preferences
              </Button>
              <Button variant="outline" className="justify-start">
                <User className="mr-2 h-4 w-4" />
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Saved Internships */}
        <Card data-testid="saved-internships-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookmarkIcon className="h-5 w-5 text-primary" />
              {t('saved_internships')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {savedInternshipData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="saved-internships-grid">
                {savedInternshipData.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8" data-testid="saved-internships-empty">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-medium mb-2" data-testid="empty-saved-title">
                  {t('no_saved_internships')}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid="empty-saved-description">
                  {t('no_saved_desc')}
                </p>
                <Button 
                  onClick={() => setLocation('/dashboard')}
                  className="text-primary hover:text-primary/80"
                  variant="ghost"
                  data-testid="button-browse-internships"
                >
                  {t('browse_internships')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Activity Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="activity-summary">
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-primary">{savedInternships.length}</div>
            <div className="text-sm text-muted-foreground">Saved Internships</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-sm text-muted-foreground">Applications Sent</div>
          </Card>
          <Card className="text-center p-4">
            <div className="text-2xl font-bold text-blue-600">2</div>
            <div className="text-sm text-muted-foreground">Interview Invites</div>
          </Card>
        </div>
      </div>
    </main>
  );
}
