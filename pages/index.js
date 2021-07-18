import { useState, useEffect } from 'react'
import GitHubService from '../src/services/api'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import FriendsList from '../src/components/FriendsList'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileSideBar from '../src/components/ProfileSideBar'
import { Title, ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import { InspirationBox } from '../src/components/InspirationBox'
import FooterPage from '../src/components/Footer'

export default function Home() {
  const [username, setUsername] = useState([])
  const [community, setCommunity] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then(userName => setUsername(userName))

    // Fetch GraphQL API
    fetch('https://graphql.datocms.com/', {
      method: "POST",
      headers: {
        'Authorization': 'fe7096184b60a969052a46234b15b4',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query { 
        allCommunities { 
          id 
          title 
          imageUrl
          linkCommunity 
          creatorSlug
        } 
      }` })
    })
    .then(response => response.json())
    .then(fullresponse => {
      const communityData = fullresponse.data.allCommunities
      setCommunity(communityData)
    })

  }, [])

  // Testar o export nesta const para chamar em outro componente
  const handleCreateCommunity = (e) => {
    e.preventDefault()

    const dataForm = new FormData(e.target)

    const comunidade = {
      title: dataForm.get('title'),
      imageUrl: dataForm.get('image'),
      linkCommunity: dataForm.get('link'),
      creatorSlug: dataForm.get('creator')
    }

    fetch('/api/communities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comunidade)
    })
    .then(async(response) => {
      const dados = await response.json()
      const comunidade = dados.registro
      const communitysUpdate = [...community, comunidade]
      setCommunity(communitysUpdate)
    })
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
              Bem-vindo(a), Gabriel Bittencourt
            </h1>
            <hr />
            <OrkutNostalgicIconSet videos="3" mensagens="999" sexy="2" confiavel="2" />
            <hr />
          </Box>
          <Box>
            <h2 className="subTitle">
              O que você deseja fazer?
            </h2>
            <div className="btns">
              <button>Adicionar Comunidade</button>
              <button>Fazer um post</button>
            </div>
          </Box>
          <Box>
            <form id="formCommunity" onSubmit={handleCreateCommunity}>
              <div>
                <i>Nome da comunidade:</i>
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
              <div>
              <i>Criador da comunidade:</i>
                <input 
                  placeholder="Nome do criador da comunidade" 
                  name="creator" 
                  aria-label="Nome do criador da comunidade"
                  type="text"
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
          <Title title="Comunidades" items={community} />
          <ul>
            {community.map((item) => {
              return (
                <li key={item.id}>
                  <a href={`/communities/${item.linkCommunity}`} target="_blank">
                    <img src={item.imageUrl} />
                    <span>{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
          </ProfileRelationsBoxWrapper>      
          <ProfileRelationsBoxWrapper>
            <InspirationBox />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
      <FooterPage />
    </>
  )
}
