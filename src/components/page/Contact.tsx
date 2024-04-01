const Contact: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl text-left">Contact</h1>
      <ul className="social flex text-xl">
        <li>
          <a href="https://www.linkedin.com/in/ricardo-erazo-676355184/" 
            target="_blank" 
            rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          LinkeIn
        </li>
        <li>
          <a href="https://github.com/RickC1218"
            target="_blank"
            rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          GitHub
        </li>
        <li>
          <a href="mailto:r.erazo2805@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          Email
        </li>
        <li>
        <a href="https://wa.me/593987202971">
            <i className="fab fa-whatsapp"></i>
          </a>
          WhatsApp
        </li>
      </ul>
    </>
  );
};

export default Contact;