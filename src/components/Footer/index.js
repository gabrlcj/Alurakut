import Box from '../Box';
import styled from 'styled-components';


const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

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
        Projeto desenvolvido na imersão React.js da <a href="https://www.alura.com.br/">Alura</a> - Desenvolvido com 🤎 por <a href="https://www.linkedin.com/in/gabrielbittencourtpenteado/">Gabriel Bittencourt</a>
      </Footer>
    </Box>
  )
}