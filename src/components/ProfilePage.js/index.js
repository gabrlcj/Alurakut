import { useState, useEffect } from 'react'
import GitHubService from '../../services/api'
import Link from 'next/dist/client/link'
import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons'
import Box from '../Box'


export default function ProfilePage() {
  const [username, setUsername] = useState([])

  useEffect(() => {
    GitHubService.getUsername().then(userName => setUsername(userName))
  }, [])

  return (
    <Box>
      <h1 className="title">
        Gabriel Bittencourt, @{username.login}
      </h1>
      <p className="link-profile">
        <Link href="/"><a>Início</a></Link> {">"} Meu perfil
      </p>
      <hr />
      <div className="profile-phrase">
        <h5>Frase do perfil:</h5>
        <i>"Os mais esforçados são os mais bem recompensados."</i>
      </div>
      <hr />
      <OrkutNostalgicIconSet videos="3" mensagens="999" sexy="1" confiavel="2" />
      <hr />
    </Box>
  )
}