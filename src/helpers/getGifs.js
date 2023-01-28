
export const getGifs = async (categoria) => {

  const path = "https://api.giphy.com/v1/gifs/search";
  const API_KEY = 'iGk4Cf4Uc0afvcm6bNLr15qT3COxulwj';
  const limit = 10;
  const url = `${path}?q=${categoria}&limit=${limit}&api_key=${API_KEY}`;

  const resp = fetch(url);
  const { data } = await resp.then(resp => resp.json());

  const gifs = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url
  }));

  return gifs;
};