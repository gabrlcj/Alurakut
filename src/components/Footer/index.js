import Box from '../Box';
import styled from 'styled-components';


const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 14px;

  @media(min-width: 860px) {
    font-size: 16px;
  }

  a {
    font-weight: 800;
    color: #053742;
    text-decoration: none;
  }
`

export default function FooterPage() {

  return (
    <Box>
      <Footer>
        <p>
          Projeto desenvolvido na imersão React da <a href="https://www.alura.com.br/" target="_blank">Alura</a>
        </p>| 
        |<p>
          Desenvolvido com 🤎 por <a href="https://www.linkedin.com/in/gabrielbittencourtpenteado/" target="_blank">Gabriel Bittencourt</a>
        </p>
      </Footer>
    </Box>
  )
}