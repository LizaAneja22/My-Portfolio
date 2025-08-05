import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import clientMeeting from "@/assets/client-meeting.jpg";
import crmInterface from "@/assets/crm-interface.jpg";
import { Calendar, ExternalLink, TrendingUp, Users } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Refund My Tax Now",
      location: "Blacktown NSW, Australia",
      position: "Remote Sales Support Intern",
      period: "JUN/25 - Current",
      image: clientMeeting,
      achievements: [
        "Interacted with 50+ International Clients weekly, Resolving Queries and Assisting with service enrollment",
        "Scheduled appointments and consistently followed up, helping reduce missed consultations by 30%",
        "Strengthened verbal communication and sales pitch delivery through daily client interactions",
        "Collaborated with the core sales team to track lead status and update CRM entries accurately",
        "Collected client feedback to help improve sales scripts and service onboarding processes"
      ]
    },
    {
      company: "Red Bull Off-Premise Sales Virtual Experience Program (Forage)",
      position: "Program Participant",
      period: "Completed Aug 2025",
      image: crmInterface,
      achievements: [
        "Analyzed real-world sales data from a key Red Bull retail chain to identify opportunities for revenue and margin growth",
        "Delivered actionable insights and strategic recommendations to increase product sales in off-premise environments",
        "Simulated a client meeting by delivering growth recommendations aimed at benefiting both Red Bull and the retail partner",
        "Created and presented a professional summary report highlighting data-driven sales tactics aligned with the Red Bull brand"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-executive text-primary mb-4">Professional Experience</h2>
          <p className="text-lg font-professional text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in sales support and strategic analysis
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transition-elegant hover:shadow-xl animate-slide-up">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-2 text-success mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-professional text-sm">{exp.period}</span>
                    </div>
                    <CardTitle className="text-2xl font-executive text-primary mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <h3 className="font-professional text-lg">{exp.company}</h3>
                      {exp.location && <ExternalLink className="h-4 w-4" />}
                    </div>
                    {exp.location && (
                      <p className="font-professional text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="p-0">
                    <h4 className="font-executive text-lg text-primary mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-professional text-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Image */}
                <div className="relative">
                  <img 
                    src={exp.image} 
                    alt={`${exp.company} work environment`}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;