const Footer = () => {
    return (
      <footer className="bg-black text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-blue-600">
              For Enquiry 
          </p>
          <p className="text-sm ">
            Phone number : 97901 01428 | Email : icrcct2k24@sairamce.edu.in
          </p>
          <p className="text-sm">
            Made by students of Third Year, Department of Computer Science - (2024)
          </p>
          <p className="text-sm text-blue-600">
            © {new Date().getFullYear()} Sri Sairam College of Engineering
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  