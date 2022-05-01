import React from "react";
import { screen, render } from "../../test-utils";
import Hero from "./Hero";

test("renders Hero with children", () => {
  render(
    <Hero>
      <p>Gestao de frotas</p>
    </Hero>
  );

  expect(screen.getByText("Gestao de frotas")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";

  render(<Hero image={image} />);

  expect(screen.getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
