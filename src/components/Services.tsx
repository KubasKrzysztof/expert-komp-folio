import { Wrench, HardDrive, Cpu, ShoppingCart, Headphones, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Serwis komputerów i laptopów",
      description: "Profesjonalna diagnoza i naprawa sprzętu komputerowego. Szybko i skutecznie.",
    },
    {
      icon: HardDrive,
      title: "Odzyskiwanie danych",
      description: "Ratujemy utracone dane z uszkodzonych dysków i nośników pamięci.",
    },
    {
      icon: Cpu,
      title: "Montaż i modernizacja PC",
      description: "Składamy komputery na zamówienie i modernizujemy istniejące zestawy.",
    },
    {
      icon: ShoppingCart,
      title: "Sprzedaż sprzętu i akcesoriów",
      description: "Szeroki wybór podzespołów, notebooków, multimediów i akcesoriów.",
    },
    {
      icon: Globe,
      title: "Tworzenie stron WWW portfolio",
      description: "Projektujemy nowoczesne i estetyczne strony internetowe typu portfolio, które profesjonalnie prezentują ofertę Twojej firmy.",
    },
    {
      icon: Headphones,
      title: "Pomoc zdalna i doradztwo IT",
      description: "Wsparcie techniczne online i profesjonalne doradztwo w zakresie IT.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nasza oferta
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kompleksowe usługi serwisowe i szeroki wybór produktów komputerowych
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg hover:transform hover:scale-105 transition-all duration-300 border border-border group hover:border-primary"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
