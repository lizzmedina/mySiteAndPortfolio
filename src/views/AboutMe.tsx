import './views.css';
const AboutMe: React.FC = () => {
    return (
      <div className="container-about">

        <div className="container-head">
          <div className="container-titulo">
            <h2>About Me</h2>
          </div>          
          <div className="container-about-photo">
            <img src="/images/myPhoto.png" alt="foto de liza" />          
          </div>
        </div>
        
        <div className="container-content">
            <p>
              Passionate about learning, who decided to change career and go from a degree in early childhood 
              pedagogy to a developer, taking advantage of the opportunities available with virtuality.
              Some experience working in the Tech Developer integrative project, where I played the role of frontend 
              using HTML, CSS, React, some libraries as font awesome, sweetalert, react icons, react calendar and including agile methodology: scrum;
              plus friendly, authentic and cheerful personality; with principles such as resilience, responsibility, 
              perseverance and determination; which stands out for assertive communication, versatility, proactivity and efficiency.
          </p>
          <h5>Studies</h5>
          <ul>
            <li>📜 Certified as "Professional Developer" by Digital House</li>
            <li>📓 Student of Makaia's"backend bootcamp"</li>
            <li>📙 Student of "frontend specialization"  at Digital House.</li> 
          </ul>
          <h5>Little more about me</h5>
          <p>I'm 28, living with my partner and pets. I'm a passionate learner with a background in early childhood 
            pedagogy, having worked as an educator for several years. I enjoy reading, cooking, and motorcycle travel. 
            Two years ago, I made a career change to software development for its dynamic nature and personal growth
            opportunities. Although I lack professional experience, I've actively contributed to various projects, applying 
            my knowledge in technologies like React, Redux, Spring Boot, and languages such as Java, JavaScript, and 
            TypeScript, along with MySQL and MongoDB databases. I'm also conversationally proficient in English.
            I'm a proactive team player who finds value in helping others. I tend to prioritize tasks based on their 
            importance and use lists to manage them effectively. Continuous learning is my passion, whether
            independently or through collaboration with peers.</p>
        </div>
      </div>
    );
  };
  
  export default AboutMe;