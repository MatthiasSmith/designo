import React from 'react';
import styled from 'styled-components';
import { Scene } from 'react-scrollmagic';

import { DESKTOP_BP } from '../../constants/constants';
import ProjectCard from './project-card';

const StyledProjectListItem = styled.li`
  cursor: pointer;

  &.animatable {
    transition: all 0.8s ease-out;
    opacity: 0;

    &:nth-of-type(even) {
      transform: translateX(50%);
    }

    &:nth-of-type(odd) {
      transform: translateX(-50%);
    }

    @media screen and (prefers-reduced-motion: reduce) {
      transition: opacity 0.6s ease-out;
      transform: unset;
    }
  }

  &.fade-in.animatable {
    opacity: 1;
    transform: translate(0rem, 0rem);
  }

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
    <Scene classToggle='fade-in' reverse={false}>
      <StyledProjectListItem className='flex-col animatable'>
        <a className='link-card'>
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
          />
        </a>
      </StyledProjectListItem>
    </Scene>
  );
};

export default ProjectListItem;
