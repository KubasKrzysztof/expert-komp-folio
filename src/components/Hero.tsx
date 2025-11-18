import { Button } from "./ui/button";
import { Phone, ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";
import heroBg from "@/assets/hero-bg.jpg";
import heroLightBg from "@/assets/hero-light.jpg";

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const backgroundImage = theme === "light" ? heroLightBg : heroBg;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: theme === "light" 
          ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${backgroundImage})` 
          : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
              expert-komp
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-primary"></div>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                pogotowie komputerowe
              </p>
              <div className="h-1 w-12 bg-primary"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-foreground mb-12 animate-fade-in">
            Serwis i sprzedaż sprzętu komputerowego – szybko, profesjonalnie, z pasją
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              onClick={() => window.location.href = "tel:+48530444799"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń teraz
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-8 py-6"
              onClick={() => scrollToSection("services")}
            >
              Zobacz ofertę
            </Button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
