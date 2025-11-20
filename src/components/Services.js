import React from 'react';
import styled from 'styled-components';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';

const Services = () => {
  const serviceData = [
    {
      icon: <TbTruckDelivery />,
      title: 'Super Fast & Free Delivery',
    },
    {
      icon: <MdSecurity />,
      title: 'Non-Contact Secure Delivery',
    },
    {
      icon: <GiReceiveMoney />,
      title: 'Money-Back Guaranteed',
    },
    {
      icon: <RiSecurePaymentFill />,
      title: 'Secure Payment System',
    },
  ];

  return (
    <Wrapper>
      <div className='container'>
        <h2 className='section-title'>Why Shop With Us?</h2>

        <div className='services-grid'>
          {serviceData.map((item, i) => (
            <div className='service-card' key={i}>
              <div className='service-icon'>{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors.bg};

  .section-title {
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .service-card {
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 1.6rem;
    padding: 3.5rem 2rem;
    text-align: center;
    box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.05);
    transition: transform 0.35s ease, box-shadow 0.35s ease;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0px 18px 45px rgba(0, 0, 0, 0.12);
    }
  }

  .service-icon {
    width: 90px;
    height: 90px;
    background: #fff;
    color: rgb(235, 143, 52);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    margin: 0 auto 1.4rem auto;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #222;
  }
`;

export default Services;
