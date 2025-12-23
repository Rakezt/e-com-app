import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { loginSuccess } from '../../store/authSlice';
import { closeAuthDrawer, openSignup } from '../../store/uiSlice';
import { loginSchema } from '../../validation/loginSchema';
import { ErrorText } from '../../Helper/ErrorText';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useCartContext } from '../../context/cartContext';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState({});
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { loadUserCart } = useCartContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setError(fieldErrors);
      return;
    }
    setError({});
    setApiError('');

    try {
      const API = 'https://e-com-app-be.onrender.com/api/auth/login';
      const res = await axios.post(API, {
        email: form.email,
        password: form.password,
      });

      dispatch(
        loginSuccess(
          {
            user: res.data.foundUser,
            token: res.data.encodedToken,
          },
          loadUserCart()
        )
      );

      dispatch(closeAuthDrawer());
    } catch (error) {
      const message = error?.response?.data?.error;

      setApiError(message);
    }
  };

  return (
    <>
      <Header>
        <h2>Welcome Back</h2>
        <span>Log in to continue</span>
      </Header>

      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Email</label>
          <input
            type='email'
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {error.email && <ErrorText text={error.email} />}
        </InputGroup>

        <InputGroup>
          <label>Password</label>
          <PasswordWrapper>
            <input
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <EyeButton
              type='button'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </EyeButton>
          </PasswordWrapper>
          {error.password && <ErrorText text={error.password} />}
        </InputGroup>
        {apiError && <ErrorText text={apiError} />}
        <Button type='submit'>Log In</Button>
        <Footer>
          New here?
          <br />
          <span onClick={() => dispatch(openSignup())}>Create an account</span>
        </Footer>
      </form>
    </>
  );
};
const Header = styled.div`
  h2 {
    font-size: 3.2rem;
    font-weight: 900;
    letter-spacing: -1px;
  }

  span {
    font-size: 1.4rem;
    color: #666;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  label {
    font-size: 1.3rem;
    font-weight: 600;
    color: #333;
  }

  input {
    padding: 1.5rem;
    font-size: 1.6rem;
    border-radius: 12px;
    border: 1px solid #ddd;
    background: #fafafa;
    transition: all 0.2s ease;

    &:focus {
      outline: none;
      background: white;
      border-color: rgb(235, 143, 52);
      box-shadow: 0 0 0 4px rgba(235, 143, 52, 0.15);
    }
  }
`;

const Button = styled.button`
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
`;
const Footer = styled.p`
  margin-top: 3rem;
  font-size: 1.4rem;

  span {
    color: rgb(235, 143, 52);
    font-weight: 800;
    text-decoration: underline;
    cursor: pointer;
  }
`;
const PasswordWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding-right: 4.5rem;
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 1.4rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #000;
  }
`;

export default LoginForm;
