import { createGlobalStyle } from "styled-components";

export const GlobaleStyles = createGlobalStyle`
*,
*::after,
*::before {
    margin    : 0;
    padding   : 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
}
body {
    font-family :sans-serif;
    background-color: #efeeff;
min-height: 100vh;
 text-transform:capitalize;
 color:#333;
}
.center-container{
   width:100%;
   margin:0 auto;
max-width:900px;
}

img{
    width:100%;
    height:100%;
    object-fit: cover;
    vertical-align: center;
    display: inline-block;
}
ul{
    list-style:none;
}
a{
    text-decoration:none;
    color:inherit;
}

h1{
    font-size:3rem;
    cursor:pointer;
}
.logo{
    font-size:4rem;
    font-weight:300;
}
h3{
    cursor:pointer;
    font-size:1.5rem;
    font-weight:700;
}
button {
    border: rgba(0,0,0,.3) solid 1px;
    border-radius:2px;
    font-size: 2rem;
    padding: 0.7rem 1.5rem;
    display: inline-block;
    color: #333;
    display: flex;
    text-transform: inherit;
    justify-content: center;
    align-items: center;
    cursor: pointer;
outline:none;
    span {
      padding-right: 0.6rem;
    }
    &:hover {
      background-color: #333;
      color: #eee;
    }
  }
`;
