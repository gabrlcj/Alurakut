import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  max-width: 500px;

  .profileArea {
    display: none;

    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    display: grid;
    max-width: 1240px;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`

export default MainGrid