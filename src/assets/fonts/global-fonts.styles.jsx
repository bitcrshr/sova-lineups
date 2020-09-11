import { createGlobalStyle } from "styled-components";

import Valorant from "./Valorant.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Valorant';
        src: url(${Valorant}) format('truetype');
    }
`;
