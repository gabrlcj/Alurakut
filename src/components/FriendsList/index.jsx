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
    </>
  )
}