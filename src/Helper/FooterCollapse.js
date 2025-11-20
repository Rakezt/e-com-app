import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FooterCollapse = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <div className='header' onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <ul className={`content ${open ? 'open' : ''}`}>
        {links.map((item, index) => (
          <li key={index}>
            <NavLink to={item.href} className='footer-link'>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

const Section = styled.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid #444;
  padding-bottom: 1rem;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    h3 {
      margin: 0;
      font-size: 1.6rem;
      color: white;
    }

    svg {
      color: white;
      font-size: 1.4rem;
    }
  }

  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
    list-style: none;
    padding-left: 0;
    margin-top: 1rem;
  }

  .content.open {
    max-height: 300px;
  }

  li {
    margin: 0.6rem 0;
  }

  /* 🔥 UNDERLINE ANIMATION */
  .footer-link {
    color: #ccc;
    text-decoration: none;
    position: relative;
    font-size: 1.4rem;
  }

  .footer-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0%;
    background: #ff9f43;
    transition: width 0.3s ease;
  }

  .footer-link:hover::after {
    width: 100%;
  }
`;

export default FooterCollapse;
