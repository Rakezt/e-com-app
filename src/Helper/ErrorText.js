import styled from 'styled-components';

const Error = styled.p`
  margin-top: 0.4rem;
  font-size: 1.25rem;
  color: #d93025; /* Google red */
  font-weight: 500;
`;

export const ErrorText = ({ text }) => {
  if (!text) return null;
  return <Error>{text}</Error>;
};
