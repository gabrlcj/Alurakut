import { useState, useEffect } from 'react'

import GitHubService from '../src/services/api'

import { AlurakutMenu } from '../src/lib/AlurakutCommons'
import FriendsList from '../src/components/FriendsList'
import MainGrid from '../src/components/MainGrid'
import ProfileSideBar from '../src/components/ProfileSideBar'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import ProfilePage from '../src/components/ProfilePage.js'
import TableSocial from '../src/components/TableSocial'

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
          <button className="btn-profile">Social</button>
          <button className="btn-profile">Posts</button>
          <button className="btn-profile">Repos</button>
          <TableSocial />
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <FriendsList />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}