import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, MessageSquare, Target } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "anejalizа22@gmail.com",
      action: "Send Email",
      href: "mailto:anejalizа22@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7087605122",
      action: "Call Now",
      href: "tel:+917087605122"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Professional Profile",
      action: "Connect",
      href: "#"
    }
  ];

  const salesFocus = [
    {
      icon: <Target className="h-5 w-5" />,
      text: "Target-driven sales approach with proven results"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      text: "Excellent communication and client relationship skills"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "Experience in cold calling and lead nurturing"
    }
  ];

  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-executive mb-4">Let's Drive Sales Success Together</h2>
          <p className="text-lg font-professional max-w-2xl mx-auto opacity-90">
            Ready to contribute to your sales team's growth. Let's discuss how my skills can help achieve your revenue targets.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Methods */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-executive mb-6">Get In Touch</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 transition-elegant hover:bg-primary-foreground/15">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {method.icon}
                      <div>
                        <h4 className="font-executive text-lg">{method.title}</h4>
                        <p className="font-professional opacity-90">{method.value}</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                      asChild
                    >
                      <a href={method.href}>
                        {method.action}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-8 p-4 bg-primary-foreground/5 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5" />
                <span className="font-executive">Location</span>
              </div>
              <p className="font-professional opacity-90">Fazilka, Punjab, India</p>
              <p className="font-professional text-sm opacity-75 mt-1">
                Available for remote opportunities and willing to relocate
              </p>
            </div>
          </div>

          {/* Sales Value Proposition */}
          <div className="animate-slide-up delay-200">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-executive mb-6 text-center">Why Choose Me for Sales?</h3>
                
                <div className="space-y-4 mb-8">
                  {salesFocus.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {item.icon}
                      <span className="font-professional leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-executive mb-2">50+</div>
                    <div className="font-professional text-sm opacity-90">International Clients Served</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-executive mb-1">30%</div>
                      <div className="font-professional text-xs opacity-90">Reduced Missed Consultations</div>
                    </div>
                    <div>
                      <div className="text-2xl font-executive mb-1">2+</div>
                      <div className="font-professional text-xs opacity-90">Years Experience</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full"
                    asChild
                  >
                    <a href="mailto:anejalizа22@gmail.com">
                      Start the Conversation
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;