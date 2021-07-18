import { useEffect, useState } from "react"
import GitHubService from "../../services/api"
import FriendsImage from "../FriendsImage"
import { Title } from "../ProfileRelations"

export default function FriendsList({ amount, random }) {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    GitHubService.getFollowers(amount, random)
    .then((friendsList) => setFriends(friendsList))
  }, [])

  return (
    <>
      <Title title="Amigos(as)" items={friends} />
      <ul>
        {friends.slice(0, 6).map((friends) => {
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
      <hr />
      <p className="link-profile">
        <a href="/amigos"><b>Ver todos</b></a>
      </p>
      <hr />
    </>
  )
}