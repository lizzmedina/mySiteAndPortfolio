
import { useEffect, useState } from 'react';
import { ProjectData } from './Proyect.interface';
import CardProject from './CardProject';
const GridProjects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const rutaDataProjects = 'https://gist.githubusercontent.com/lizzmedina/ca071e386aba471023c03915874d521b/raw/cbb8a0c4dbe4db4a4fd13cc2375c93383ffd449c/myProjects';
  const getData = () => {
    fetch(rutaDataProjects)
    // '/archivos/projects.json'
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
        //console.log("algo salió mal.");
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
