import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const Order = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>Yay!</h2>
          <h3>you have completly placed your order</h3>
          <p>Keep shooping with us as we bring exciting offers every week.</p>
          <NavLink to="/">
            <Button>Go back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 5rem;
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Order;
