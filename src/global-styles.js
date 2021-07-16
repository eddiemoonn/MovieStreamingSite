import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    html, body{
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: rgb(63,94,251);
        background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(171,49,74,1) 100%);
        color: #333333;
        font-size: 16px;
    }
`;