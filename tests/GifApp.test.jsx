import { render } from "@testing-library/react";
import GifApp from "../src/GifApp";


describe("Pruebas en <GifApp/>", () => {
   test("Debe mostrar un snapshop del componente", () => {
      const { container } = render(<GifApp />);

      expect(container).toMatchSnapshot();
   });

   test("Debe mostrar una lista de gifs", () => {
      // TODO: pendiente de implementar
   });
});
