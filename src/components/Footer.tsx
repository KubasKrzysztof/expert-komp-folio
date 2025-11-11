const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Expert-Komp. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Pogotowie komputerowe – Dziewin, ul. Szeroka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
