import styled from 'styled-components';
import Product from '../Product';

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className='grid'>
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.4rem;
    }
  }
`;

export default GridView;
