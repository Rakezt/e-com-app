import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaDiscord, FaTwitter } from 'react-icons/fa';
import FooterHoverMenu from '../Helper/FooterHoverMenu';

const Footer = () => {
  return (
    <Wrapper>
      <section className='contact-short'>
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started</h3>
            <br />
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button>
              <NavLink to='/contact'>Get Started</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container grid grid-four-column'>
          <div className='footer-about'>
            <h3>YourSweetNightmare</h3>
            <p>
              Designed for riders who don’t wait for permission. No rules. No
              limits. Just pure street-born chaos carved into every deck.
            </p>
          </div>
          <div className='footer-subscribe'>
            <h3>Subcribe to us</h3>
            <form action='#'>
              <input type='email' placeholder='email' className='email' />
              <input type='submit' value='subscribe' className='btn' />
            </form>
          </div>
          <div className='footer-social'>
            <h3>Connect with us</h3>
            <div className='footer-social--icons'>
              <div>
                <FaDiscord className='icons' />
              </div>
              <div>
                <FaTwitter className='icons' />
              </div>
              <div>
                <FaLinkedin className='icons' />
              </div>
            </div>
          </div>
          <div className='footer-contact'>
            <div>
              <h3>Call us</h3>
              <a href='tel: 12345678'>
                <h3>+91 1234567890</h3>
              </a>
            </div>
          </div>
        </div>
        <div className='footer-bottom--section'>
          <hr />
          <div className='container grid grid-two-column'>
            <p>
              @{new Date().getFullYear()} YourSweetNightmare. All right reserved
            </p>

            <div className='hover-sections'>
              <FooterHoverMenu
                title='Legal'
                links={[
                  {
                    href: '/s&r&c',
                    label: 'Sustainability and Responsibility',
                  },
                  { href: '/mss', label: 'Modern Slavery Statement' },
                  { href: '/pi', label: 'Payment Info' },
                ]}
              />

              <FooterHoverMenu
                title='Policies'
                links={[
                  { href: '/pp', label: 'Privacy Policy' },
                  { href: '/t&u', label: 'Terms of Use' },
                  { href: '/t&c', label: 'Terms & Conditions of Sale' },
                ]}
              />

              <FooterHoverMenu
                title='Cookies'
                links={[
                  { href: '/dc', label: 'Declaration of Conformity' },
                  { href: '/cp', label: 'Cookie Policy' },
                  { href: '/cp', label: 'Cookie Preferences' },
                ]}
              />
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.black};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .email {
      border-radius: 1rem;
      margin-bottom: 1rem;
    }
    .btn {
      background-color: rgb(235, 143, 52);
      border-radius: 1rem;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
    .last {
      padding-left: 10rem;
    }
  }
  .hover-sections {
    display: flex;
    flex-direction: row;
    gap: 10rem;
    position: relative;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
      .last {
        padding-left: 0rem;
      }
    }
    .hover-sections {
      display: none;
    }
  }
`;
export default Footer;
