import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Vue", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 78 },
      { name: "Firebase", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <Card className="p-6 animate-fade-up border-primary/20">
      <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
      <div className="space-y-8">
        {skills.map((category) => (
          <div key={category.category}>
            <h3 className="text-lg font-medium mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="outline" className="text-primary border-primary">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all duration-500 ease-out neon-border"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}