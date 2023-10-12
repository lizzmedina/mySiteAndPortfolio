
export interface GridProjectsProps {
    projects: ProjectData[]; 
  }

export interface ProjectData{
    id: number;
    imageSrc: string;
    description: string;
    toolsUsed: string;
    repoLink: string;
    viewLink: string;
}
export interface ProjectCardProps {
  imageSrc: string; 
  description: string; 
  toolsUsed: string; 
  repoLink: string; 
  viewLink: string; 
}