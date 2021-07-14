import { Title } from "../ProfileRelations"

export const InspirationBox = () => {
  const inspirations = [
    {
      id: '122342557654514345',
      title: 'Filipe Deschamps',
      image: 'https://avatars.githubusercontent.com/u/4248081?v=4',
      link: 'https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw'
    },
    {
      id: '0897767565514345',
      title: 'Diogo Fernandes',
      image: 'https://avatars.githubusercontent.com/u/2254731?v=4',
      link: 'https://github.com/diego3g'
    },
    {
      id: '1452376863445',
      title: 'Mayk Brito',
      image: 'https://avatars.githubusercontent.com/u/6643122?v=4',
      link: 'https://www.youtube.com/channel/UCkr-unKyg_SiEzUwUY_uluQ'
    },
    {
      id: '1235678909675',
      title: 'Rafaella Ballerine',
      image: 'https://avatars.githubusercontent.com/u/54322854?v=4',
      link: 'https://www.youtube.com/channel/UC_-uuuZbY0AAt9CViNzvc-Q'
    },
    {
      id: '1243254647784345',
      title: 'Alura',
      image: 'https://yt3.ggpht.com/ytc/AKedOLRszi3O39AB5-uw_1jkrxJppwegjToBgIKFIOqiiA=s900-c-k-c0x00ffffff-no-rj',
      link: 'https://www.youtube.com/user/aluracursosonline'
    },
    {
      id: '13242655787514345',
      title: 'Rocketseat',
      image: 'https://yt3.ggpht.com/ytc/AKedOLQkXnYChXAHOeBQLzwhk1_BHYgUXs6ITQOakoeNoQ=s88-c-k-c0x00ffffff-no-rj',
      link: 'https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg'
    }
  ]

  return (
    <>
      <Title title="Inspirações na Programação" items={inspirations} />
      <ul>
        {inspirations.map((item) => {
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
    </>
  )
}