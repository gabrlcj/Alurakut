import { SiteClient } from 'datocms-client'

export default async function dataFromCommunities(request, response) {
  if(request.method === 'POST') {
    const TOKEN = "9bcb6da13c82a44ceb0b2d8e1f4f4b"

    const client = new SiteClient(TOKEN)
  
    const record = await client.items.create({
      itemType: '971871',
      ...request.body,
      // title: 'Comunidade de Teste',
      // imageUrl: 'https://source.unsplash.com/random/300x300',
      // linkCommunity: 'https://github.com/gabrlcj',
      // creatorSlug: 'gabrlcj'
    })
  
    response.json({
      dados: 'algum dado qualquer',
      registro: record,
    })

    return
  }

  response.status(404).json({
    message: 'Nada para ver aqui...'
  })
}