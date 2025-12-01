import { lazy, Suspense, useEffect, useMemo } from 'react';
import styled from 'styled-components';

const HeroSection = lazy(() => import('./components/HeroSection'));
const FeatureProduct = lazy(() => import('./components/FeatureProduct'));
const Services = lazy(() => import('./components/Services'));

const Home = () => {
  const data = useMemo(() => ({ name: 'YourSweetNightmare' }), []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainWrapper>
      <Suspense fallback={<PageSkeleton />}>
        <HeroSection myData={data} />
        <FeatureProduct />
        <Services />
      </Suspense>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  background-color: ${({ theme }) => theme.colors?.bg || '#f5f5f5'};
`;

// Simple page-level skeleton while lazy components load
const PageSkeleton = () => (
  <SkeletonWrapper>
    <div className='hero-skeleton shimmer' />
    <div className='section-skeleton shimmer' />
    <div className='section-skeleton shimmer' />
  </SkeletonWrapper>
);

const SkeletonWrapper = styled.div`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .hero-skeleton,
  .section-skeleton {
    border-radius: 1.6rem;
    background: linear-gradient(90deg, #e2e2e2 25%, #f5f5f5 50%, #e2e2e2 75%);
    background-size: 200% 100%;
    min-height: 220px;
  }

  .hero-skeleton {
    min-height: 320px;
  }

  .shimmer {
    animation: shimmer 1.5s infinite;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default Home;
