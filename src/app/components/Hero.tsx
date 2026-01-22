const Hero = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-24 sm:py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-light">
            Soluções Completas em Hardware e Inteligência Fiscal
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-light/80">
            Manutenção especializada, infraestrutura de redes e assessoria contábil exclusiva para desenvolvedores de software.
          </p>
          <div className="mt-8">
            <button className="bg-primary hover:bg-secondary text-light font-bold py-3 px-8 rounded-lg text-lg">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
