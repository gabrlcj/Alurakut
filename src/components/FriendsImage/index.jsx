export default function FriendsImage({ login, avatar_url, html_url }) {
  return (
    <li>
      <a href={html_url} target='_blank'>
        <img src={avatar_url} alt={login} />
        <span>{login}</span>
      </a>
    </li>
  )
}