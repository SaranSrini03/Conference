const Footer = () => {
    return (
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sri Sairam College of Engineering
          </p>
          <p className="text-sm">
            Made by students of Third Year, Department of Computer Science - (2024)
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  