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
    background-color: ${(p) => p.theme.theme["onhover-Btn-Bg"]};
    min-height: 100vh;
    text-transform:capitalize;
    color:${(p) => p.theme.theme["color-btn"]};
    width:100%;
    overflow :hidden ;

    text-align:center;
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
h2,h4{
  color:  ${(p) => p.theme.theme["color-btn"]}
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
    color: ${(p) => p.theme.theme["color-btn"]};
    display: flex;
    border: 2px solid ${(p) => p.theme.theme["color-btn"]} ;
    background-color:${(p) => p.theme.theme["nav-btn-svg"]};

    text-transform: inherit;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline:none;
    span {
      padding-right: 0.6rem;
    }
    &:hover {
      background-color: ${(p) => p.theme.theme["onhover-Btn-Bg"]};
      color:${(p) => p.theme.theme["onhover-Btn-color"]};
    }
  }
.back{
    position: absolute;
    width: 100%;
    min-height: 100vh;
    height:100%;
    z-index: -3;
    background-color: ${(p) => p.theme.theme["back-bg"]};
    top:0;
    left:0%;
    transition: .5s ease-in all;

}
.active{
    transform:  perspective(1750) rotateY(50deg) ;
    left:20%
}

`;
