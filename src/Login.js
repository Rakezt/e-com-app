import styled from 'styled-components';
import LoginForm from './components/auth/LoginForm';

const Login = () => {
  return (
    <Wrapper>
      <Left>
        <Brand>
          <span className='tag'>EST. 2025</span>
          <h1>SKATE. SHOP. REPEAT.</h1>
          <p>
            Premium skate gear engineered for speed, control, and authentic
            street culture.
          </p>
        </Brand>
      </Left>

      <Right>
        <Card>
          <LoginForm />
        </Card>
      </Right>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  background: #aba7a7ff;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  background: linear-gradient(
      rgba(180, 174, 174, 0.75),
      rgba(133, 131, 129, 0.9)
    ),
    url('/images/login-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 8rem;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

const Brand = styled.div`
  max-width: 520px;
  color: white;

  .tag {
    font-size: 1.2rem;
    letter-spacing: 3px;
    opacity: 0.7;
  }

  h1 {
    font-size: 6rem;
    font-weight: 900;
    line-height: 1;
    letter-spacing: -3px;
    margin: 1.5rem 0 2rem;
  }

  p {
    font-size: 1.9rem;
    opacity: 0.85;
    line-height: 1.6;
  }
`;

const Right = styled.div`
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`;

const Card = styled.div`
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 4.5rem;
  border-radius: 18px;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.15);
  animation: fadeUp 0.6s ease;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  button {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: rgb(235, 143, 52);
    color: white;
    font-size: 1.6rem;
    font-weight: 800;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: transform 0.15s ease, box-shadow 0.15s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(235, 143, 52, 0.4);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }
`;

export default Login;
