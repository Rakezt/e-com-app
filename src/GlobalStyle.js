import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* -----------------------------------------
   RESET + MODERN BASE
-------------------------------------------- */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: #ffffff;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
}

/* -----------------------------------------
   PREMIUM SCROLLBAR (VANS / NIKE STYLE)
-------------------------------------------- */

body::-webkit-scrollbar {
  width: 1.2rem;
}
body::-webkit-scrollbar-track {
  background: #111; /* deep black like Vans footer */
}
body::-webkit-scrollbar-thumb {
  background: rgb(235, 143, 52);
  border-radius: 10px;
  border: 3px solid #111;
  transition: all 0.3s ease;
}
body::-webkit-scrollbar-thumb:hover {
  background: #fff;
  border-color: rgb(235, 143, 52);
}

/* -----------------------------------------
   TYPOGRAPHY SYSTEM — PREMIUM HEADINGS
-------------------------------------------- */

h1, h2, h3, h4 {
  font-family: "Work Sans", sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
  letter-spacing: -0.5px; /* modern tight spacing */
}

h1 {
  font-size: 6rem;
  line-height: 1.1;
  text-transform: uppercase;
}

h2 {
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 700;
}

h3 {
  font-size: 2rem;
  font-weight: 600;
}

p {
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  line-height: 1.65;
  max-width: 70ch;
}

a {
  text-decoration: none;
  color: inherit;
  transition: 0.2s ease;
}

a:hover {
  opacity: 0.75;
}

li {
  list-style: none;
}

/* -----------------------------------------
   GLOBAL CONTAINER + GRID SYSTEM
-------------------------------------------- */

.container {
  max-width: 140rem;
  margin: 0 auto;
  padding: 0 3rem;
}

.grid {
  display: grid;
  gap: 6rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: repeat(4, 1fr);
}

.grid-five-column {
  grid-template-columns: repeat(5, 1fr);
}

.common-heading {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 4rem;
  letter-spacing: -1px;
  text-transform: uppercase;
}

/* -----------------------------------------
   INPUTS — Nike-Style Clean Inputs
-------------------------------------------- */

input, textarea {
  width: 100%;
  max-width: 50rem;
  padding: 1.4rem 2rem;
  border-radius: 8px;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  background: #fafafa;
  color: #222;
  transition: border 0.2s ease, background 0.2s ease;
}

input:focus, textarea:focus {
  border-color: rgb(235, 143, 52);
  background: #fff;
  outline: none;
}

/* submit button */
input[type="submit"] {
  max-width: 18rem;
  background-color: rgb(235, 143, 52);
  color: #fff;
  border: none;
  padding: 1.4rem 2rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
}

input[type="submit"]:hover {
  background: #111;
  transform: translateY(-3px);
}

/* -----------------------------------------
   MOBILE RESPONSIVE
-------------------------------------------- */

@media (max-width: ${({ theme }) => theme.media.tab}) {
  html {
    font-size: 56%;
  }

  .container {
    padding: 0 2rem;
  }

  .grid {
    gap: 4rem;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  html {
    font-size: 50%;
  }

  h1 { font-size: 4.8rem; }
  h2 { font-size: 3rem; }

  .grid-two-column,
  .grid-three-column,
  .grid-four-column {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 1.6rem;
  }
}
`;
