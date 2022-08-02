import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en el helper getGifs', () => {

  test('Debe retornar un arreglo de gifs', async () => {

    const categoria = 'Cats';
    const gifs = await getGifs(categoria);

    // console.log(gifs);
    // Espera que el Arreglo tenga mas de 0 elementos
    expect(gifs.length).toBeGreaterThan(0);
    // Espera que el Arreglo tenga un elemento con la estructura correcta
    expect(gifs[ 0 ]).toEqual(expect.objectContaining({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    }))
  })

})