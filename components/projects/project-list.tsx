import React from 'react';
import styled from 'styled-components';
import { DESKTOP_BP } from '../../constants/constants';

import projects from '../../data/projects';
import ProjectListItem from './project-list-item';

const StyledProjectList = styled.ul`
  @media screen and (min-width: ${DESKTOP_BP}em) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(21.875rem, 1fr));
    column-gap: 1.875rem;
    row-gap: 2rem;
    justify-content: center;
    margin: 0 auto;
  }
`;

const ProjectList = ({ projectType }: { projectType: string }) => {
  const projectList = projects[projectType];

  return (
    <StyledProjectList>
      {projectList.map((project) => (
        <ProjectListItem project={project} key={project.title} />
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;
