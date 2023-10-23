
import './views.css';

const Home: React.FC = () => {
    return (
      <div className="container-home">
        <div className="container-photo">
          <img src="{public/images/myPhoto.png}" alt="foto de liza"  className="photo"/>
         
          <div>
          <p>Hello, I'm Liza! 👋 I'm a passionate learner and a software developer. With a
            Certified as a "Professional Developer" by Digital House. I am also  enrolled in
            Makaia's backend bootcamp and in the frontend specialization program at Digital House.
          </p>     
        </div>
        </div>
        
        <div>
           <p> 
          I have hands-on experience with technologies like React, Redux, Spring Boot, Java, JavaScript, TypeScript, 
          and databases like MySQL and MongoDB. I'm also proficient in English.
          I'm proactive and known for my assertive communication and adaptability. I prioritize tasks efficiently and 
          thrive in collaborative environments. Let's create together!
        </p>
        </div>
       
      </div>
    );
};
  export default Home;