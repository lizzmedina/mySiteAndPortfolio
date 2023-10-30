import './views.css';
const Contact: React.FC = () => {
    return (
      <div className="container-contact">
        <h2>Contact</h2>
        <p>Feel free to reach out to me through the following channels:</p>
        <ul className='list-contact'>
        <li>
          <a href="https://github.com/lizzmedina" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo_github_icon_azul.png" alt="logo-github" className="img-github" /> GitHub Profile
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/liza-medina/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin-round.png" alt="logo-linkedin" className="img-linkeding" /> LinkedIn Profile
          </a>
        </li>
          <li><a href="/archivos/LizaDanerisMedina-SoftwareDeveloper.pdf" download> 
                  <img src="/images/descargaDocumento.png" alt="descargar-cv" className= "img-download" /> Download CV (PDF)
                </a>
          </li>          
        </ul>
      </div>
    );
  };
  
  export default Contact;