import React from "react";
import ThemeProvider from "../src/styles/ThemeProvider";
import { render } from "@testing-library/react";

const TestProvider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
