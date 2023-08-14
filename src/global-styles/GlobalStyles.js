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
        /* --primary-font: rgba(24, 24, 26, 1); */
        --primary-font: rgba(40, 43, 46, 1);

    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
    }

    #root, 
    body, 
    html, 
    .app {
        height: 100%;
    }

    body {
        font-size: 1.15rem;
        font-family: 'Open Sans', sans-serif;  
        color: var(--primary-font);
    }

    .app {
        display: flex;
        flex-direction: column;
    }

    .pd {
        padding: 0 1rem
    }

    .filter-pink {
        filter: invert(59%) sepia(11%) saturate(6756%) hue-rotate(299deg) brightness(106%) contrast(101%);
    }

    .bs-1 {
        box-shadow:  rgba(3, 247, 235, 0.4) 12px -5px 25px 1px,
                     rgba(255, 96, 181, 0.4) 12px 10px 25px 1px,
                     rgba(255, 96, 181, 0.4) -10px 10px 25px 1px;
    }

    .bs-3d {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
                    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
                    border-radius: 15px;
    }

    .bs-blue {
        box-shadow: rgba(3, 247, 235, 0.4) 0px 8px 35px;
    }
    
    .bs-pink {
        box-shadow: rgba(255, 96, 181, 0.4) 0px 8px 35px;
    }

    .filter-white {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(138deg) brightness(103%) contrast(102%);
    }



    @media (min-width: 1200px) {
        body {
            font-size: 1.25rem;
            font-family: 'Open Sans', sans-serif;  
            color: var(--primary-font);
        }

        .pd {
                padding: 0 8rem;
            }
    }

    @media (min-width: 1400px) {
        .pd {
                padding: 0 10rem;
            }
    }
    
    

    

`;
