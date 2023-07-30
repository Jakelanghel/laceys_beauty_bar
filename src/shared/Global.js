import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


    :root {
        --white: #ffff;
        --off-white: #fdfbf7; 
        --black: #010101;
        --off-black: #424242;
        --translucent-black: hsl(0,0%,0%, .92);
        --grey: #6E675F;
        --txt-grey: #808080;
        --hot-pink: #ff69b4;
        --light-pink: rgba(219, 90, 186, .5);

    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Oswald', sans-serif;
    }

    .app {
    }

    .filter-pink {
        filter: invert(59%) sepia(11%) saturate(6756%) hue-rotate(299deg) brightness(106%) contrast(101%);
    }
    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(138deg) brightness(103%) contrast(102%);
    }

`;
