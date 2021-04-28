import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { DESKTOP_BP, TABLET_BP } from '../../constants/constants';

const StyledProjectCard = styled.article`
  background: var(--light-peach-bg);
  border-radius: var(--border-radius);
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;

  .heading-sm {
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
  }

  &:hover {
    background-color: var(--color-primary);
    color: white;

    .heading-sm {
      color: white;
    }
  }

  .text-container {
    height: 100%;
    padding: 2rem 1.875rem;
  }

  .heading-sm {
    color: var(--color-primary);
  }

  .description {
    margin-top: 1rem;
  }

  @media screen and (min-width: ${TABLET_BP}em) {
    flex-direction: row;
    align-items: center;

    .text-container {
      flex: 1 0 50%;
    }
  }

  @media screen and (min-width: ${DESKTOP_BP}em) {
    flex-direction: column;

    .text-container {
      flex: 1;
    }

    .description {
      flex: 1;
    }
  }
`;

const ProjectCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <StyledProjectCard>
      <Image src={image} layout='intrinsic' width='700' height='640' />
      <div className='text-container flex-col flex-centered'>
        <h3 className='heading-sm'>{title}</h3>
        <p className='description text-center'>{description}</p>
      </div>
    </StyledProjectCard>
  );
};

export default ProjectCard;
