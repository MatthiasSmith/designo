import styled from 'styled-components';
import Image from 'next/image';

import Layout from '../components/layout/layout';
import ContentContainer from '../components/layout/content-container';
import PageIntroCard from '../components/pages/home/page-intro-card';
import ProductLinksList from '../components/products/product-links-list';
import QualitiesList from '../components/pages/home/qualities-list';

const StyledBgImages = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  .leaf-bg-top {
    top: 47%;
  }

  .leaf-bg-bottom {
    top: 138%;
    right: 0;
    transform: rotate(180deg);
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyledBgImages className='hidden-sm hidden-md'>
        <div className='bg-image leaf-bg-top'>
          <Image
            src='/shared/desktop/bg-pattern-leaf.svg'
            layout='fixed'
            width={1006}
            height={594}
          />
        </div>
        <div className='bg-image leaf-bg-bottom'>
          <Image
            src='/shared/desktop/bg-pattern-leaf.svg'
            layout='fixed'
            width={1006}
            height={594}
          />
        </div>
      </StyledBgImages>
      <PageIntroCard />
      <ContentContainer isHome={true}>
        <ProductLinksList />
        <QualitiesList />
      </ContentContainer>
    </Layout>
  );
}
