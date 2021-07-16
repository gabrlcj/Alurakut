import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-image: url('https://i.pinimg.com/originals/b6/48/4c/b6484ca31c5e40a76702b191ecea2548.gif');
    /* background-image: url('https://images.hdqwalls.com/wallpapers/demon-slayer-minimal-4k-zh.jpg'); */
    background-size: 100% 100%;
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

  .profile-phrase {
    border: 1px solid #12121250;
    padding: 8px 14px;

    i {
      font-size: 13px;
    }
  }

  .link-profile {
    font-size: 14px;

    a {
      color: #39A2DB;
    }
  }

  .btn-profile {
    color: black;
    padding: 6px 10px;
    border-radius: 8px;
    border: 2px solid rgba(160,199,254,1);
    border-bottom: none;
    background: rgba(160,199,254,.8);
    margin-left: 8px;
    margin-bottom: -3px;
    text-decoration: underline;

    :hover {
      background: #A2DBFA;
      opacity: 1;
    }
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
