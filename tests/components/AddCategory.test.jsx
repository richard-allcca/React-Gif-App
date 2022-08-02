import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe('Pruebas en <AddCategory/>', () => {

  test('Debe mostrar placeholder de input y texto del boton', () => {
    const { getByPlaceholderText, getByText } = render(<AddCategory onAddCategory={() => { }} />);

    const input = getByPlaceholderText('Buscar gifs');
    const button = getByText('Agregar');

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  }
  );

  test('Debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onAddCategory={() => { }} />)

    // hacemos referendia al input con (textbox)
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Saitama' } });

    expect(input.value).toBe('Saitama')
    // screen.debug();
  })

  test('Debe llamar onNewCategory si el input tiene un valor', () => {

    const inputValue = 'Saitama';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />)

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");// para capturar la referencia a un "form" debe tener un "aria-label"

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onAddCategory).toHaveBeenCalled();// verificar que la funcion se llame
    expect(onAddCategory).toHaveBeenCalledTimes(1);// verificar que la funcion se llame una sola vez
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);// verificar que la funcion se llame con el valor de la caja de texto

  })

  test('Debe evitar llamar a la funcion onAddCategory si el input esta vacio', () => {

    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();

  })

})