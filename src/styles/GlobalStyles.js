import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;400i;700;700i&family=Open+Sans:wght@400;400i;700;700i&display=swap');

  html, body {
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyles
