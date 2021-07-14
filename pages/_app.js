import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-image: url('https://images.hdqwalls.com/wallpapers/demon-slayer-minimal-4k-zh.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: sans-serif;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }

  .inputURL {
    display: block;

    @media(min-width: 860px) {
      display: flex;
    }
  }

  i {
    font-size: 12px;
    margin-left: 10px;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#121212',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
