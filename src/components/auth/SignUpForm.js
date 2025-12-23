import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../store/authSlice';
import { closeAuthDrawer, openLogin } from '../../store/uiSlice';
import { signupSchema } from '../../validation/signupSchema';
import { ErrorText } from '../../Helper/ErrorText';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = signupSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setError(fieldErrors);
      return;
    }
    setError({});

    const API = 'https://e-com-app-be.onrender.com/api/auth/signup';

    const res = await axios.post(API, {
      firstname: form.firstname,
      lastname: form.lastname,
      email: form.email,
      password: form.password,
    });

    dispatch(
      loginSuccess({
        user: res.data.createdUser,
        token: res.data.encodedToken,
      })
    );

    dispatch(closeAuthDrawer());
    navigate('/');
  };

  return (
    <>
      <Header>
        <h2>Create Account</h2>
        <span>Join the family and start shopping</span>
      </Header>

      <form onSubmit={handleSubmit} autoComplete='off'>
        <Row>
          <InputGroup>
            <label>First Name</label>
            <input
              type='text'
              name='firstname'
              autoComplete='given-name'
              value={form.firstname}
              onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            />
            {error.firstname && <ErrorText text={error.firstname} />}
          </InputGroup>

          <InputGroup>
            <label>Last Name</label>
            <input
              type='text'
              name='lastname'
              autoComplete='family-name'
              value={form.lastname}
              onChange={(e) => setForm({ ...form, lastname: e.target.value })}
            />
            {error.lastname && <ErrorText text={error.lastname} />}
          </InputGroup>
        </Row>

        <InputGroup>
          <label>Email</label>
          <input
            type='email'
            name='signup-email'
            autoComplete='new-email'
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
              name='signup-password'
              autoComplete='new-password'
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

        <InputGroup>
          <label>Re - enter Password</label>
          <PasswordWrapper>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirm-password'
              autoComplete='new-password'
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            <EyeButton
              type='button'
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </EyeButton>
          </PasswordWrapper>
          {error.confirmPassword && <ErrorText text={error.confirmPassword} />}
        </InputGroup>

        <Button type='submit'>Create Account</Button>

        <Footer>
          Have an account?
          <br />
          <span onClick={() => dispatch(openLogin())}> Log in</span>
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

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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
  margin-top: 1.8rem;
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
`;

const Footer = styled.p`
  margin-top: 2.5rem;
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

export default SignupForm;
