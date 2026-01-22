const Footer = () => {
  return (
    <footer className="bg-secondary/20">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-light mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-light/80 hover:text-light">Manutenção de Hardware</a></li>
              <li><a href="#" className="text-light/80 hover:text-light">Infraestrutura</a></li>
              <li><a href="#" className="text-light/80 hover:text-light">Dev Support</a></li>
              <li><a href="#" className="text-light/80 hover:text-light">Desenvolvimento</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-light mb-4">Contato</h3>
            <p className="text-light/80"> (66) 3544-1504</p>
            <p className="text-light/80">contato@vcinf.tech</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-light mb-4">Social</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary/50 pt-8 text-center text-light/80">
          <p>&copy; 2026 VCINF TECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
