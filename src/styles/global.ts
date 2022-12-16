import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    button {
        background-color: none;
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    html, body {
        height: 100%;
    }

    body {
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
    }
`;