import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .map {
      padding: 1rem;
      border: 2px solid rgb(235, 143, 52);
      width: 80%;
      margin: auto;
    }

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input,
          textarea {
            border: 1px solid rgb(235, 143, 52);
          }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: rgb(235, 143, 52);
            border-radius: 0.5rem;
            border: 1px solid rgb(235, 143, 52);
            margin: auto;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: rgb(235, 143, 52);
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.433897574961!2d77.58611107321174!3d13.071664712680306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1925ed3bc12f%3A0x7b731ab2850d5f8b!2sPhoenix%20Mall%20Of%20Asia!5e0!3m2!1sen!2sin!4v1704925403473!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xleqglpe"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.nickname : ""}
              required
              autoComplete="off"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              value={isAuthenticated ? user.email : ""}
              required
              autoComplete="off"
            />
            <textarea
              type="text"
              placeholder="Enter your messages here"
              name="messages"
              required
              autoComplete="off"
              cols="30"
              rows="10"
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
