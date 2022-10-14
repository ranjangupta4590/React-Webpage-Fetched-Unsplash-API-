import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  // font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  // overflow-x: hidden;
}
h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 4rem;
  font-weight: 900;
}
h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 2rem;
   font-weight: 500;
   white-space: normal;
   text-align: center;
  }
  h3 {
  // font-size: 1.8rem;
  font-weight: 400;
}
p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.container {
  max-width: 100rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 5rem;
}
.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}
.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}
.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}


.common-heading {
  font-size: 3.8rem;
  font-weight: 600;
  margin-bottom: 6rem;
  text-transform: capitalize;
}
input, textarea{
max-width: 15rem;
color: ${({ theme }) => theme.colors.black};
padding: 1rem 2rem;
border: 1px solid ${({ theme }) => theme.colors.border};
// text-transform: uppercase;
box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}

input[type="submit"]{
max-width: 14rem;
margin-top: 1rem;
background-color: ${({ theme }) => theme.colors.btn};
color: ${({ theme }) => theme.colors.white};
padding: 0.8rem 2.2rem  ;
border-radius:9px;
border-style: solid;
border-width: .1rem;
// text-transform: uppercase;
font-size: 1.2rem;
cursor: pointer;
}

`;