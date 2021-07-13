import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons"
import Box from "../Box"

function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <a href={`https://github.com/${props.username}`} alt="Github account">
        <img src={`https://github.com/${props.username}.png`} />
      </a>
      <hr />
      <a className="boxLink" href={`https://github.com/${props.username}`} alt="Github account">
        Gabriel Bittencourt (@{props.username})
      </a>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default ProfileSidebar