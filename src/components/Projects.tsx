import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GitFork, ExternalLink } from "lucide-react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

export function Projects() {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/YounesAH15/repos")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.slice(4));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Card className="p-6 animate-fade-up border-primary/20">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-24 bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 animate-fade-up border-primary/20">
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block no-underline"
          >
            <Card className="p-4 hover:shadow-md transition-all border-primary/20 hover:border-primary/40">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium flex items-center gap-2">
                    {project.name}
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.description || "No description available"}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.topics?.map((topic) => (
                      <Badge key={topic} variant="outline" className="text-xs text-primary border-primary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-primary" />
                    {project.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-4 w-4 text-primary" />
                    {project.forks_count}
                  </span>
                </div>
              </div>
            </Card>
          </a>
        ))}
      </div>
    </Card>
  );
}