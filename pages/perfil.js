import { useState, useEffect } from 'react'

import GitHubService from '../src/services/api'

import { AlurakutMenu } from '../src/lib/AlurakutCommons'
import FriendsList from '../src/components/FriendsList'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSideBar from '../src/components/ProfileSideBar'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { InspirationBox } from '../src/components/InspirationBox'
import ProfilePage from '../src/components/ProfilePage.js'

export default function Perfil() {
  const [username, setUsername] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then(userName => setUsername(userName))
  }, [])

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar username={username.login} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <ProfilePage />
          <Box>
            <h2 className="subTitle">
              Este é o seu perfil:
            </h2>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <FriendsList />
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <InspirationBox />
          </ProfileRelationsBoxWrapper>  
        </div>
      </MainGrid>
    </>
  )
}