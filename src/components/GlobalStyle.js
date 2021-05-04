import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

* {
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

body {
    background: white; 
    font-family: "Roboto", san serif; 

}

button {
    font-weight: bold; 
    font-size: 1.1.rem; 
    cursor: pointer; 
    padding: 1rem 2rem; 
    border: 3px solid #EB6E64;
    background: transparent; 
    color: black; 
    transition: all 0.5s ease;
    font-family: "Roboto", san serif; 
    
    &:hover {
        background-color: #EB6E64; 
        color: black; 
    }
   
}
    h2{
        font-weight: lighter; 
        font-size: 4rem; 
        color: black;
    }
    h3{
        color:black; 
    }
    h4 {
        font-weight: bold; 
        font-size: 2rem; 
        
    }
    span {
        font-weight: bold; 
        color: #EB6E64;
    }
    a{ 
        font-size: 1.1rem;
    }
    p {
        padding: 3rem 0rem; 
        color: #a1a1a1; 
        font-size: 1.4rem; 
        line-height:150%; 
    }

`;

export default GlobalStyle;
