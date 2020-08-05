import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    html, body, #__next {
        height: 100%;
        width: 100%;
        display: flex;
        overflow-x: hidden;
    }

    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;
