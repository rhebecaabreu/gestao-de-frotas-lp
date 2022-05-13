import { render, screen } from "./test-utils";
import App from "./App";

test("renders call to action", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/comece agora/i);
  expect(linkElement).toHaveLength(1);
});
