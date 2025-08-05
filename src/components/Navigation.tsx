import { Button } from "@/components/ui/button";
import { User, Briefcase, GraduationCap, Mail } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User className="h-4 w-4" /> },
    { id: 'skills', label: 'Skills', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-executive text-xl text-primary">
            LIZA ANEJA
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="transition-elegant hover:bg-secondary"
              >
                {item.icon}
                <span className="ml-2 font-professional">{item.label}</span>
              </Button>
            ))}
          </div>

          <Button 
            className="transition-elegant"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;