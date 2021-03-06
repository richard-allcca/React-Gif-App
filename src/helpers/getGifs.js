
export const getGifs = async (categoria) => {
  // let categoria = 'One Punch'
  let API_KEY = 'iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj'
  const url = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=10&api_key=${API_KEY}`;

  // const url = `http://api.giphy.com/v1/gifs/search?api_key=iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj&q=dragon ball&limit=10`
  const resp = fetch(url)
  const { data } = await resp.then(resp => resp.json())

  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url
  }))

  // console.log(gifs)
  return gifs
}