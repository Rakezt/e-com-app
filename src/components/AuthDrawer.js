import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeAuthDrawer } from '../store/uiSlice';
import LoginForm from './auth/LoginForm';

const AuthDrawer = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.authDrawerOpen);

  if (!open) return null;

  return (
    <>
      <Overlay onClick={() => dispatch(closeAuthDrawer())} />

      <Drawer>
        <Close onClick={() => dispatch(closeAuthDrawer())}>×</Close>

        <Brand>
          <h2>Join the Family</h2>
          <p>Earn rewards. Track orders. Faster checkout.</p>
        </Brand>

        <LoginForm />
      </Drawer>
    </>
  );
};
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 2000;
`;

const Drawer = styled.aside`
  position: fixed;
  top: 60px;
  right: 0;
  width: 420px;
  max-width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 2001;
  padding: 3.5rem;
  animation: slideIn 0.35s ease forwards;
  overflow-y: auto;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  font-size: 3rem;
  background: none;
  border: none;
  cursor: pointer;
`;

const Brand = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 900;
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.4rem;
    color: #555;
  }
`;

export default AuthDrawer;
