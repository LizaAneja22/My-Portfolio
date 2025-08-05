import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sales from "@/assets/dashboard.jpg";
import { BarChart3, Users, MessageSquare, Target } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Tools & Technologies",
      skills: [
        "MS Excel", "Google Sheets", "Figma", "Canva", 
        "HubSpot CRM", "Zoho CRM", "LinkedIn Sales Navigator"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Sales & Client Engagement",
      skills: [
        "Cold Calling", "Up selling", "Email Campaigns", 
        "Objection handling", "Lead Nurturing", "Follow-Up Strategy", 
        "Target-based Selling approach"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Soft Skills",
      skills: [
        "Verbal Fluency", "Professional Writing in English", 
        "Confident Speaker", "Team Leader", "Team work", 
        "Basic Negotiation Techniques"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Languages",
      skills: ["English", "Hindi", "Punjabi"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-executive text-primary mb-4">Core Skills</h2>
          <p className="text-lg font-professional text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set combining technical proficiency with exceptional sales expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Grid */}
          <div className="grid gap-6 animate-slide-up">
            {skillCategories.map((category, index) => (
              <Card key={index} className="transition-elegant hover:shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-primary">
                    {category.icon}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="font-professional transition-elegant hover:bg-accent"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Analytics Visual */}
          <div className="animate-slide-up delay-200">
            <Card className="overflow-hidden shadow-lg border-0">
              <img 
                src={sales} 
                alt="Sales Analytics Dashboard" 
                className="w-full h-[400px] object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-executive text-xl text-primary mb-2">
                  Data-Driven Sales Approach
                </h3>
                <p className="font-professional text-muted-foreground">
                  Leveraging analytics and CRM tools to track performance, identify opportunities, 
                  and drive strategic decision-making for improved sales outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;