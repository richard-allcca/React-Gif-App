import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"


describe('Pruebas en el componente <GifItem/>', () => {

  const title = 'Titulo del Gif'
  const url = 'https://media1.giphy.com/media/3o7btLqYqjCQQqQqZS/200w.gif'


  test('Debe retornar un snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />)

    expect(container).toMatchSnapshot()
  })

  test('should mostrar el URL y ALT de la <img>', () => {

    render(<GifItem title={title} url={url} />)

    //? Muestra el URL de la imagen y el ALT de la misma
    // expect(screen.getByRole('img').src).toContain(url)
    // expect(screen.getByRole('img').alt).toContain(title )

    // Método mejorado
    const { src, alt } = screen.getByRole('img')

    expect(src).toContain(url);
    expect(alt).toContain(alt);
  })

  test('Debe mostrar el titulo en el componente', () => {

    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()

  })


})