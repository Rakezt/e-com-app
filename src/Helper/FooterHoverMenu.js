import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const FooterHoverMenu = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className='title'>{title}</div>

      {open && (
        <div className='dropdown'>
          {links.map((item, i) => (
            <NavLink key={i} to={item.href} className='link'>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .title {
    color: white;
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 600;
  }

  .dropdown {
    position: absolute;
    bottom: 120%;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    background: white;
    padding: 1.6rem 2rem;
    border-radius: 8px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
    min-width: 230px;
    animation: fadeIn 0.25s ease-out;
    z-index: 20;
  }

  .link {
    color: #333;
    font-size: 1.45rem;
    text-decoration: none;
    position: relative;
  }

  .link:hover {
    color: #ff9f43;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default FooterHoverMenu;
