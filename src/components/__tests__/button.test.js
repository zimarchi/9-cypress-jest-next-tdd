import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("Button renders correct text", () => {
  render(<Button>Hello</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Hello");
});

test("Button is red by default", () => {
  render(<Button />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: red");
});

test("Button accepts custom color", () => {
  render(<Button color="yellow" />);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("background-color: yellow");
});
