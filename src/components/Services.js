// src/components/Services.jsx
import React, { memo } from 'react';
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
      desc: 'Delivered to your door in record time with real-time tracking.',
    },
    {
      icon: <MdSecurity />,
      title: 'Non-Contact Secure Delivery',
      desc: 'Your safety first with fully contactless drop-offs.',
    },
    {
      icon: <GiReceiveMoney />,
      title: 'Money-Back Guaranteed',
      desc: 'Not feeling it? Easy returns and full refunds.',
    },
    {
      icon: <RiSecurePaymentFill />,
      title: 'Secure Payment System',
      desc: 'Encrypted payments with all major cards and wallets.',
    },
  ];

  return (
    <Wrapper>
      <div className='container'>
        <h2 className='section-title'>Why Shop With Us?</h2>

        <div className='services-grid'>
          {serviceData.map((item, i) => (
            <article className='service-card' key={i}>
              <div className='service-icon'>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 8rem 0;
  background: ${({ theme }) => theme.colors?.bg || '#fafafa'};

  .section-title {
    font-size: 3.2rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 4rem;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 3rem;

    @media (max-width: ${({ theme }) => theme.media.tablet || '992px'}) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .service-card {
    background: rgba(255, 255, 255, 0.82);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 1.6rem;
    padding: 3.2rem 2.4rem;
    text-align: center;
    box-shadow: 0px 12px 35px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.5);

    &:hover {
      transform: translateY(-8px) translateZ(0);
      box-shadow: 0px 18px 45px rgba(0, 0, 0, 0.12);
      background: rgba(255, 255, 255, 0.96);
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
    font-size: 1.9rem;
    font-weight: 700;
    color: #222;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    color: #555;
    line-height: 1.7;
  }
`;

export default memo(Services);
