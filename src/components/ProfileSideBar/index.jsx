import Box from "../Box"

function ProfileSidebar(props) {
  return (
    <Box>
      <a href={`https://github.com${props.username}`} alt="Github account">
        <img src={`https://github.com/${props.username}.png`} />
      </a>
    </Box>
  )
}

export default ProfileSidebar