import React from "react";
import { screen, render } from "../../test-utils";
import Hero from "./Hero";

test("renders Hero with children", () => {
  render(
    <Hero>
      <p>Bruno Nardini</p>
    </Hero>
  );

  expect(screen.getByText("Bruno Nardini")).toBeInTheDocument();
});

test("renders image background", () => {
  const image = "http://test/image.jpg";

  render(<Hero image={image} />);

  expect(screen.getByTestId("hero")).toHaveStyleRule({
    backgroundImage: image,
  });
});
