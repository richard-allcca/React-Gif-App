import { renderHook, waitFor } from "@testing-library/react"
import useFetchGif from "../../src/hooks/useFetchGif";

// ! Falla en los 2 test, images.length no lo reconoce

describe('Pruebas en el hook useFetchGif', () => {

  test('Debe retornar el estado inicial', () => {

    const { result } = renderHook(() => useFetchGif('One Punch'))
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeTruthy();
  })

  test('Debe retornar un arreglo de img e isLoading en false', async () => {

    const { result } = renderHook(() => useFetchGif('One Punch'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  })

}) 