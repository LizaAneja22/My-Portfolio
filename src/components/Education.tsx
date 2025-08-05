import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, ExternalLink, BookOpen } from "lucide-react";

const Education = () => {
  const education = {
    university: "Chandigarh University",
    degree: "Bachelors of Technology",
    period: "2021 - 2025",
    coursework: [
      "Business Communication",
      "Marketing Fundamentals", 
      "MS Excel",
      "Google Sheets"
    ]
  };

  const certifications = [
    {
      title: "Fundamentals of Sales Management",
      provider: "Alison",
      hasLink: true
    },
    {
      title: "Microsoft 365 Fundamentals",
      provider: "Microsoft",
      hasLink: true
    },
    {
      title: "Sales and CRM Overview",
      provider: "Professional Certification",
      hasLink: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-executive text-primary mb-4">Education & Certifications</h2>
          <p className="text-lg font-professional text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and professional certifications driving sales excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="transition-elegant hover:shadow-lg animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-6 w-6" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-executive text-xl text-primary">{education.degree}</h3>
                  <p className="font-professional text-lg text-muted-foreground">{education.university}</p>
                  <p className="font-professional text-sm text-muted-foreground">{education.period}</p>
                </div>
                
                <div>
                  <h4 className="font-executive text-lg text-primary mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, index) => (
                      <Badge key={index} variant="outline" className="font-professional">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="transition-elegant hover:shadow-lg animate-slide-up delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-primary">
                <Award className="h-6 w-6" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-secondary/50 rounded-lg transition-elegant hover:bg-secondary/70">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-executive text-lg text-primary">{cert.title}</h4>
                        <p className="font-professional text-muted-foreground">{cert.provider}</p>
                      </div>
                      {cert.hasLink && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sales Focus Statement */}
        <Card className="mt-12 transition-elegant hover:shadow-lg animate-slide-up delay-300">
          <CardContent className="p-8 text-center">
            <h3 className="font-executive text-2xl text-primary mb-4">
              Commitment to Sales Excellence
            </h3>
            <p className="font-professional text-lg text-foreground max-w-4xl mx-auto leading-relaxed">
              My educational background in technology combined with specialized sales certifications 
              provides a unique foundation for understanding both the technical aspects of products 
              and the strategic elements of successful sales execution. This blend enables me to 
              communicate effectively with clients, analyze market data, and leverage technology 
              to drive sales performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;