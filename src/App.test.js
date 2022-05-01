import { render, screen } from "./test-utils";
import App from "./App";

test("renders call to action", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/saiba mais/i);
  expect(linkElement).toHaveLength(2);
});
