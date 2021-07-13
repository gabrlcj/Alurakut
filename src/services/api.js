export default class GitHubService
{
  static async getFollowers(quantidade = 0, randomico = false) {
    const url = "https://api.github.com/users/gabrlcj/followers"
    const params = new URLSearchParams()

    if(quantidade > 0) {
      params.append('amount', quantidade)
    }

    if(randomico) {
      params.append('random', true)
    }

    const answer = await fetch(url + '?' + params)
    const followers = await answer.json()
    return followers
  }

  static async getUsername() {
    const url = 'https://api.github.com/users/gabrlcj'
    const answer = await fetch(url)
    const username = await answer.json()
    return username
  }
}