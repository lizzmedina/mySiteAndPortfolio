
import { useEffect, useState } from 'react';
import { ProjectData } from './Proyect.interface';
import CardProject from './CardProject';
const GridProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const getData = () => {
    fetch('src/components/projectsInfo/projects.json')
    .then((response) => {
      if (!response.ok) {
        //throw new Error(`Network response was not ok: ${response.status}`);
        console.log("algo salió mal.");
      }
      return response.json();
    })
    .then((data) => setProjects(data))
    .catch((error) => console.error('Error al cargar datos de proyectos:', error));
  }

  useEffect(() => {
    getData()  ;
  }, [projects]);

  return (
    <div className="grid-projects">
      {projects.map(project=> 
        <CardProject
          key={project.id}
          imageSrc={project.imageSrc}
          description={project.description}
          toolsUsed={project.toolsUsed}
          repoLink={project.repoLink}
          viewLink={project.viewLink}
        />
      )}
    </div>
  );
};


export default GridProjects;
