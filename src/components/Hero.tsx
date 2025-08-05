import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/myself.jpg";
import { Mail, Phone, MapPin, Linkedin, File } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-7xl tracking-tight font-extrabold text-primary leading-tight">
              LIZA ANEJA
            </h1>
            <h2 className="text-2xl lg:text-3xl font-professional text-muted-foreground">
              Sales Executive
            </h2>
            <p className="text-lg font-professional text-foreground max-w-lg">
              Energetic and confident Sales Executive with strong communication and client handling skills. 
              Specialized in building relationships, driving revenue growth, and exceeding sales targets.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="font-professional">Fazilka, Punjab, India</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-professional">+91 7087605122</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="font-professional">anejalizа22@gmail.com</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/Liza_Resume.pdf" download>
            <Button size="lg" className="transition-elegant hover:bg-stone-100 hover:text-black duration-300 border hover:shadow-xl">
              <File className="h-4 w-4 mr-2" />
              Download CV
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/liza-aneja-483044231/" target="blank">
            <Button variant="outline" size="lg" className="transition-elegant hover:bg-stone-800 hover:text-white duration-300 hover:shadow-xl">
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn Profile
            </Button>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="animate-slide-up hover:shadow-2xl duration-500 shadow-black rounded-md">
          <Card className="overflow-hidden shadow-lg border-0">
            <img 
              src={heroImage} 
              alt="Professional Sales Workspace" 
              className="w-full h-[500px] object-cover object-bottom"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;