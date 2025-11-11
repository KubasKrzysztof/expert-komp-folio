import { Phone, MapPin, Globe, Mail } from "lucide-react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skontaktuj się z nami
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Jesteśmy do Twojej dyspozycji. Zadzwoń lub odwiedź nas w naszym serwisie.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Dane kontaktowe */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Telefon</h3>
                  <a
                    href="tel:+48530444799"
                    className="text-lg text-primary hover:underline"
                  >
                    +48 530 444 799
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Adres</h3>
                  <p className="text-lg text-muted-foreground">
                    Dziewin, ul. Szeroka
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Strona WWW</h3>
                  <a
                    href="https://www.expert-komp.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary hover:underline"
                  >
                    www.expert-komp.pl
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Email</h3>
                  <a
                    href="mailto:kontakt@expert-komp.pl"
                    className="text-lg text-primary hover:underline"
                  >
                    kontakt@expert-komp.pl
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formularz kontaktowy */}
          <ContactForm />
        </div>

          <div className="text-center bg-card p-8 rounded-lg border border-primary">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">
              Potrzebujesz pomocy?
            </h3>
            <p className="text-muted-foreground mb-6">
              Skontaktuj się z nami telefonicznie – jesteśmy gotowi pomóc!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
              onClick={() => window.location.href = "tel:+48530444799"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń: +48 530 444 799
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
