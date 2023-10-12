import React from 'react';
import './views.css';
import GridProjects from '../components/projectsInfo/GridProjec';

const Projects: React.FC = () => {
  return (
    <div className='container-projects'>
      <h1>My Projects</h1>     
      <GridProjects  />
    </div>
  );
};

export default Projects;
