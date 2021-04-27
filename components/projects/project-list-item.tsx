import React from 'react';
import styled from 'styled-components';
import { DESKTOP_BP } from '../../constants/constants';
import ProjectCard from './project-card';

const StyledProjectListItem = styled.li`
  &:not(:first-of-type) {
    margin-top: 2.5rem;
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    &:not(:first-of-type) {
      margin-top: 0;
    }
  }
`;

const ProjectListItem = ({ project }) => {
  return (
    <StyledProjectListItem>
      <ProjectCard
        image={project.image}
        title={project.title}
        description={project.description}
      />
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
