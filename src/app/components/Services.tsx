import { Wrench, Network, FileText, Code } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-12 w-12 text-primary" />,
    title: "Manutenção de Hardware",
    description: "Peças e equipamentos.",
  },
  {
    icon: <Network className="h-12 w-12 text-primary" />,
    title: "Infraestrutura",
    description: "Redes, Servidores (Proxy, Firewall, BD).",
  },
  {
    icon: <FileText className="h-12 w-12 text-primary" />,
    title: "Dev Support",
    description: "Assessoria fiscal para devs e soft-houses.",
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Desenvolvimento",
    description: "Apps e Softwares sob medida.",
  },
];

const Services = () => {
  return (
    <div className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-light">Nossas Especialidades</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary/20 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-light mb-2">{service.title}</h3>
              <p className="text-light/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
