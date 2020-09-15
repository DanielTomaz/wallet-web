import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
   *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   html, body, #root {
     height: 100%;
   }

    *, button, input{
      font-family: 'Roboto', sans-serif;
    }

   :root {
     --primary: #FCFFF7;
     --secondary: #046865;
     --tertiary: #6C63FF;
     --buttons: #21A0A0;

   }

`;