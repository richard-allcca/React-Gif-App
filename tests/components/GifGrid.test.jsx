import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import useFetchGif from './../../src/hooks/useFetchGif';

// ! Importante "jest.mock" tiene nueva forma de ejecutarlo (revisalo en la documentación) 
jest.mock('../../src/hooks/useFetchGif.js')

describe('Pruebas en <GifGrid/>', () => {

  const categoria = 'One Punch';

  test('Debe mostrar loading al iniciar', () => {

    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid categoria={categoria} />);
    screen.debug()
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(categoria))

  })

  test('Debe mostrar items a la carga de imágenes con useFetchGif', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg'
      },
    ]

    useFetchGif.mockReturnValue({
      images: gifs,
      isLoading: false,
    })
    render(<GifGrid categoria={categoria} />);
    // expect(screen.getAllByRole('img').length).toBe(2)

  })


})