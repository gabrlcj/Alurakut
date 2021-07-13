import React, { useState, useEffect } from 'react'
import GitHubService from '../src/services/api'
import FriendsList from '../src/components/FriendsList'

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSideBar from '../src/components/ProfileSideBar'

import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'


export default function Home() {
  const [username, setUsername] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then((userName) => setUsername(userName))
  }, [])

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar username={username.login} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem-vindo(a), {username.login}
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <FriendsList />
          </ProfileRelationsBoxWrapper>      
          <Box>
            <h2 className="smallTitle">
              Comunidade
            </h2>
          </Box>      
          <Box>
            <h2 className="smallTitle">
              Inspirações na Programação
            </h2>
          </Box>   
        </div>
      </MainGrid>
    </>
  )
}
