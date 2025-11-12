import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: none;
  background: linear-gradient(145deg, #f0a44b, #d97b28);
  color: #fff;
  padding: 1.3rem 2.6rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25),
    inset 0 1px 3px rgba(255, 255, 255, 0.4);

  &:hover {
    transform: translateY(-3px); /* 💡 lift on hover = interactive feel */
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3),
      inset 0 1px 4px rgba(255, 255, 255, 0.5);
    background: linear-gradient(145deg, #e68a2e, #bf6415);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.4);
    background: linear-gradient(145deg, #d07b25, #a6550f);
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
