import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const MyImages = ({ image = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(image[0]);

  useEffect(() => {
    if (image.length > 0) {
      setMainImage(image[0]);
    }
  }, [image]);

  return (
    <Wrapper>
      <div className='grid grid-four-column'>
        {/* {image.map((item, index) => {
          return (
            <figure>
              <img
                src={item.url}
                alt={item.filename}
                className='box-image--style'
                key={index}
                onClick={() => setMainImage(item)}
              />
            </figure>
          );
        })} */}
      </div>
      <div className='main-screen'>
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      padding: 0.3rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 0.5rem;
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImages;
