import { useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../store/authSlice';
import { closeAuthDrawer } from '../../store/uiSlice';

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API = 'https://e-com-app-be.onrender.com/api/auth/signup';

    const res = await axios.post(API, form);

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

      <form onSubmit={handleSubmit}>
        <Row>
          <InputGroup>
            <label>First Name</label>
            <input
              type='text'
              required
              onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            />
          </InputGroup>

          <InputGroup>
            <label>Last Name</label>
            <input
              type='text'
              required
              onChange={(e) => setForm({ ...form, lastname: e.target.value })}
            />
          </InputGroup>
        </Row>

        <InputGroup>
          <label>Email</label>
          <input
            type='email'
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </InputGroup>

        <InputGroup>
          <label>Password</label>
          <input
            type='password'
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </InputGroup>

        <Button type='submit'>Create Account</Button>

        <Footer>
          Already a member? <Link to='/login'>Log in</Link>
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

  a {
    color: rgb(235, 143, 52);
    font-weight: 800;
    text-decoration: none;
  }
`;

export default SignupForm;
