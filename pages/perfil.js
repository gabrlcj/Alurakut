import { useState, useEffect } from 'react'
import GitHubService from '../src/services/api'
import { AlurakutMenu } from '../src/lib/AlurakutCommons'
import MainGrid from '../src/components/MainGrid'
import ProfileSideBar from '../src/components/ProfileSideBar'
import ProfilePage from '../src/components/ProfilePage.js'
import TableSocial from '../src/components/TableSocial'
import styled from 'styled-components'

export const MainGridProfile = styled(MainGrid)`
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
    grid-template-areas: "profileArea welcomeArea";
    grid-template-columns: 160px 1fr;
  }
`

export default function Perfil() {
  const [username, setUsername] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then(userName => setUsername(userName))
  }, [])

  return (
    <>
      <AlurakutMenu />
      <MainGridProfile>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar username={username.login} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <ProfilePage />
          <button className="btn-profile">Social</button>
          <TableSocial />
        </div>
      </MainGridProfile>
    </>
  )
}