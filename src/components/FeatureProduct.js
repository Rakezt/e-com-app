import { useProductContext } from '../context/productContext';
import styled from 'styled-components';

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <div className='container'>
        <h2 className='title'>CHECK NOW!</h2>
        <h3 className='subtitle'>Our Featured Categories</h3>

        <div className='vans-grid'>
          {featureProducts.map((item) => (
            <div className='vans-card' key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className='vans-label'>{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .title {
    color: rgb(235, 143, 52);
    font-weight: 700;
    font-size: 3rem;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 3rem;
  }

  /* ---- Vans Style Grid ---- */
  .vans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }

  .vans-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .vans-card img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .vans-card:hover img {
    transform: scale(1.08);
  }

  .vans-label {
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    color: white;
    font-size: 2.3rem;
    font-weight: 700;
    text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.6);
    text-transform: uppercase;
  }

  /* ---- Mobile Responsive ---- */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .vans-grid {
      grid-template-columns: 1fr;
    }

    .vans-card img {
      height: 300px;
    }

    .vans-label {
      font-size: 1.8rem;
    }
  }
`;

export default FeatureProduct;
