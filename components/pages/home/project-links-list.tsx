import React from 'react';

import projectLinks from '../../../data/project-links';
import ProjectLinkItem from './project-link-item';

const ProjectLinksList = () => {
  return (
    <ul>
      {projectLinks.map((project) => (
        <ProjectLinkItem
          title={project.title}
          bgImages={project.imageSources}
          key={project.title}
        />
      ))}
    </ul>
  );
};

export default ProjectLinksList;
