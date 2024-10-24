import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Github, Youtube, Share2, ExternalLink, Linkedin, Briefcase } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { ContactForm } from './ContactForm';

interface LinkItem {
  title: string;
  url: string;
  icon: React.ReactNode;
}

export default function Profile() {
  const { toast } = useToast();
  const [links] = useState<LinkItem[]>([
    {
      title: "Follow me on GitHub",
      url: "https://github.com/YounesAH15",
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/younesharrat/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      title: "Subscribe to my YouTube",
      url: "https://www.youtube.com/@MrNejiraito",
      icon: <Youtube className="h-5 w-5" />,
    },
  ]);

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'YounesHarrat - Links',
        url: window.location.href,
      });
    } catch (err) {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard!",
        description: "Share it with your friends",
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <ThemeToggle />
      
      <div className="text-center space-y-6 animate-fade-down">
        <Avatar className="w-32 h-32 mx-auto border-2 border-primary neon-border">
          <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQEMea7zbXhbzw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709309723506?e=1735171200&v=beta&t=6QoqcKwaxizYX76PSa0LOfA5Z54eMcKcPhi8SZgDRII" />
          <AvatarFallback>YH</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">YounesHarrat</h1>
          <p className="text-muted-foreground">@younesharrat</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="text-primary border-primary">Full Stack Developer</Badge>
          <Badge variant="secondary" className="text-primary border-primary">Content Creator</Badge>
          <Badge variant="secondary" className="text-primary border-primary">Tech Enthusiast</Badge>
        </div>
        <p className="max-w-md mx-auto text-muted-foreground text-lg">
          Building innovative solutions and sharing knowledge through code. Passionate about web development and technology.
        </p>
      </div>

      <div className="pt-8 space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline transform transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            <Card className="p-4 hover:shadow-lg border-primary/20 hover:border-primary/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {link.icon}
                  <span className="font-medium">{link.title}</span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
            </Card>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4 pt-4">
        <a href="/portfolio" className="w-full">
          <Button className="w-full gap-2 neon-border" size="lg">
            <Briefcase className="h-5 w-5" />
            View Portfolio & Skills
          </Button>
        </a>
        
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share Profile
        </Button>
      </div>

      <ContactForm />
    </div>
  );
}