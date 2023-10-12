import { ProjectCardProps } from './Proyect.interface';
import './ProjectInfo.css';
  
  const CardProject: React.FC<ProjectCardProps> = ({
    imageSrc,
    description,
    toolsUsed,
    repoLink,
    viewLink,
  }) => {

    return (

      <div className="project-card">
        <img src={imageSrc} alt="Project" />
        <div className="project-details">
          <p className="project-description">{description}</p>
          <p className="project-tools">Tools: {toolsUsed}</p>
          <p><a href={repoLink} target="_blank" rel="noopener noreferrer">
            Ver Repositorio
          </a></p>
          <p><a href={viewLink} target="_blank" rel="noopener noreferrer">
            Visualizar Proyecto
          </a></p>
          
        </div>
      </div>
    );
  };
  
  export default CardProject;