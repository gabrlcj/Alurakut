import { useState, useEffect } from 'react'
import Link from 'next/dist/client/link'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import MainGrid from '../src/components/MainGrid'
import ProfileSideBar from '../src/components/ProfileSideBar'
import GitHubService from '../src/services/api'
import FriendsImage from '../src/components/FriendsImage'
import styled from "styled-components"
import Box from '../src/components/Box'
import { Title } from '../src/components/ProfileRelations'

export const MainGridFriends = styled(MainGrid)`
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

export const ProfileRelationsBoxWrapperFriends = styled(Box)`
  .smallTitle {
    color: #121212;
  }
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
    max-height: 660px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
  b {
    color: #1e88e5;
    text-decoration: underline;
  }
`

export default function Amigos({ amount, random }) {
  const [username, setUsername] = useState([])
  const [friends, setFriends] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then(userName => setUsername(userName))

    GitHubService.getFollowers(amount, random)
    .then((friendsList) => setFriends(friendsList))
  }, [])

  return (
    <>
      <AlurakutMenu />
      <MainGridFriends>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar username={username.login} />
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Gabriel Bittencourt (@{username.login})
            </h1>
            <p className="link-profile">
              <Link href="/"><a>In??cio</a></Link> {">"} Meus Amigos
            </p>
            <hr />
            <OrkutNostalgicIconSet videos="3" mensagens="999" sexy="2" confiavel="2" />
            <hr />
          </Box>
          <ProfileRelationsBoxWrapperFriends>
            <Title title="Amigos(as)" items={friends} />
            <ul>
              {friends.map((friends) => {
                return (
                  <FriendsImage
                    key={friends.login}
                    html_url={friends.html_url}
                    avatar_url={friends.avatar_url}
                    login={friends.login}
                  />
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapperFriends>
        </div>
      </MainGridFriends>
    </>
  )
}