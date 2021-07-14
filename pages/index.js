import React, { useState, useEffect } from 'react'

import GitHubService from '../src/services/api'

import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

import FriendsList from '../src/components/FriendsList'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSideBar from '../src/components/ProfileSideBar'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'


export default function Home() {
  const [username, setUsername] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then((userName) => setUsername(userName))
  }, [])

  const [community, setCommunity] = useState([
    {
      id: '1213123141514345',
      title: 'Eu odeio acordade cedo',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
      link: '#'
      },
      {
        id: '0912803912830918',
        title: 'Alura Stars',
        image: 'https://www.alura.com.br/assets/img/stars/logoIlustra.1622650220.svg',
        link: 'https://www.alura.com.br/stars'
      },
      {
        id: '123984673902314',
        title: 'NBA',
        image: 'https://a4.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fmisc_logos%2F500%2Fnba.png',
        link: 'https://www.nba.com/'
      },
      {
        id: '1231415757587689879',
        title: 'Pérolas da NBA',
        image: 'https://pbs.twimg.com/profile_images/1351954925086007301/6HKat4eQ_400x400.jpg',
        link: '#'
      }
  ])

  const handleCreateCommunity = (e) => {
    e.preventDefault()

    const dataForm = new FormData(e.target)

    const comunidade = {
      id: new Date().toISOString(),
      title: dataForm.get('title'),
      image: dataForm.get('image'),
      link: dataForm.get('link')
    }

    const communitysUpdate = [...community, comunidade]
    setCommunity(communitysUpdate)
  }

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
          <Box>
            <h2 className="subTitle">
              O que você deseja fazer?
            </h2>
            <form onSubmit={handleCreateCommunity}>
              <div>
                <i>Nome comunidade:</i>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  required
                />
              </div>
              <i>Capa da comunidade:</i>
              <div className="inputURL">
                <input
                  placeholder="URL para usar de capa" 
                  name="image" 
                  aria-label="URL para usar de capa"
                  type="url"
                />
                <input
                  name="image"
                  aria-label="Selecione uma imagem para importar"
                  type="file"
                />
              </div>
              <div>
              <i>Link da comunidade:</i>
                <input 
                  placeholder="Coloque uma URL para o site da comunidade" 
                  name="link" 
                  aria-label="Coloque uma URL para o site da comunidade"
                  type="url"
                  required
                />
              </div>
              <button className="btn-grad">
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <FriendsList />
          </ProfileRelationsBoxWrapper>      
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Comunidades ({community.length})
          </h2>
          <ul>
            {community.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link} target="_blank">
                    <img src={item.image} />
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
          </ProfileRelationsBoxWrapper>      
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
