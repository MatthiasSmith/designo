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

    .link-card {
      display: flex;
      flex-flow: column;
      flex: 1;
    }
  }
`;

const ProjectListItem = ({ project }) => {
  return (
    <StyledProjectListItem className='flex-col'>
      <a href='#' className='link-card'>
        <ProjectCard
          image={project.image}
          title={project.title}
          description={project.description}
        />
      </a>
    </StyledProjectListItem>
  );
};

export default ProjectListItem;
