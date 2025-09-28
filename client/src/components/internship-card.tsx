import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MapPin, Clock, IndianRupee, Shield, Brain } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useLocalStorage } from '@/hooks/use-local-storage';
import type { Internship } from '@/mock/internships';

interface InternshipCardProps {
  internship: Internship;
  showRecommendation?: boolean;
}

export function InternshipCard({ internship, showRecommendation = false }: InternshipCardProps) {
  const { t } = useLanguage();
  const [savedInternships, setSavedInternships] = useLocalStorage<number[]>('savedInternships', []);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Always check localStorage for the most current state
  const getCurrentSavedState = () => {
    const currentSaved = JSON.parse(localStorage.getItem('savedInternships') || '[]');
    return currentSaved.includes(internship.id);
  };
  
  const isSaved = getCurrentSavedState();

  const toggleSave = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 200);
    
    // Get the current state from localStorage to ensure we have the latest data
    const currentSaved = JSON.parse(localStorage.getItem('savedInternships') || '[]');
    const isCurrentlySaved = currentSaved.includes(internship.id);
    
    let newSavedInternships;
    if (isCurrentlySaved) {
      newSavedInternships = currentSaved.filter((id: number) => id !== internship.id);
    } else {
      newSavedInternships = [...currentSaved, internship.id];
    }
    
    // Update both localStorage and local state
    localStorage.setItem('savedInternships', JSON.stringify(newSavedInternships));
    setSavedInternships(newSavedInternships);
    
    // Debug logging
    console.log(`Toggled save for internship ${internship.id}. New saved list:`, newSavedInternships);
  };

  return (
    <Card className="hover:shadow-md transition-all duration-200" data-testid={`internship-card-${internship.id}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1" data-testid={`internship-title-${internship.id}`}>
              {internship.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-2" data-testid={`internship-company-${internship.id}`}>
              {internship.company}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSave}
            className={`p-2 rounded-full hover:bg-accent transition-all duration-200 ${
              isAnimating ? 'scale-125' : 'scale-100'
            }`}
            data-testid={`button-save-${internship.id}`}
          >
            <Heart 
              className={`h-4 w-4 transition-colors ${
                isSaved ? 'fill-primary text-primary' : 'text-muted-foreground'
              }`} 
            />
          </Button>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span data-testid={`internship-location-${internship.id}`}>{internship.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            <span data-testid={`internship-duration-${internship.id}`}>{internship.duration}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <IndianRupee className="mr-2 h-4 w-4" />
            <span data-testid={`internship-stipend-${internship.id}`}>{internship.stipend}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed" data-testid={`internship-description-${internship.id}`}>
          {internship.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {internship.skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
              data-testid={`skill-badge-${skill.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {internship.verified && (
              <Badge className="verified-badge text-white text-xs" data-testid={`badge-verified-${internship.id}`}>
                <Shield className="mr-1 h-3 w-3" />
                {t('verified')}
              </Badge>
            )}
            {showRecommendation && (
              <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs" data-testid={`badge-ai-match-${internship.id}`}>
                <Brain className="mr-1 h-3 w-3" />
                {t('ai_matched')}
              </Badge>
            )}
          </div>
          <Button 
            className="font-medium text-sm"
            data-testid={`button-apply-${internship.id}`}
          >
            {t('apply_now')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
