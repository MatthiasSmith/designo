import React from 'react';
import styled from 'styled-components';

import { DESKTOP_BP } from '../../../constants/constants';
import projectLinks from '../../../data/project-links';
import ProjectLinkItem from './project-link-item';

const StyledProjectLinksList = styled.ul`
  @media screen and (min-width: ${DESKTOP_BP}em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 1.875rem;
    row-gap: 1.5rem;
  }
`;

const ProjectLinksList = () => {
  return (
    <StyledProjectLinksList>
      {projectLinks.map((project) => (
        <ProjectLinkItem
          title={project.title}
          href={project.href}
          bgImages={project.imageSources}
          key={project.title}
        />
      ))}
    </StyledProjectLinksList>
  );
};

export default ProjectLinksList;
