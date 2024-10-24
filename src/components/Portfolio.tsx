import { Skills } from './Skills';
import { Projects } from './Projects';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="mb-8">
        <a href="/" className="inline-block">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Links
          </Button>
        </a>
      </div>
      
      <div className="space-y-8">
        <Skills />
        <Projects />
      </div>
    </div>
  );
}