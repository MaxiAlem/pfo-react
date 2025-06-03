const Footer = () => {
    return (
      <footer className="">
        <div className="">
          <a href="" target="_blank" rel="noopener noreferrer" className="">
            Soy un link
          </a>
          <span>|</span>
          <a href="mailto:soporte@climo.org" className="">
            Soporte
          </a>
          <span>|</span>
          <span> {new Date().getFullYear()} Clim-o</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  