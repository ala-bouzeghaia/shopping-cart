import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        font-family: "Public Sans", sans-serif;
        color: hsl(233, 26%, 24%);
    }
`;
