import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Card className="p-6 animate-fade-up">
      <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input placeholder="Your Name" required />
        </div>
        <div>
          <Input type="email" placeholder="Your Email" required />
        </div>
        <div>
          <Textarea placeholder="Your Message" required className="min-h-[100px]" />
        </div>
        <div className="flex justify-between items-center">
          <Button type="submit" disabled={loading}>
            <Mail className="h-4 w-4 mr-2" />
            {loading ? "Sending..." : "Send Message"}
          </Button>
          <a
            href="mailto:younesharrat@example.com"
            className="text-sm text-muted-foreground hover:underline"
          >
            Or email me directly
          </a>
        </div>
      </form>
    </Card>
  );
}