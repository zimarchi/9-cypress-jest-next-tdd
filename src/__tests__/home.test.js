import { render, screen } from "@testing-library/react";
import Home from "../app/page";

const nav = {
  templates:
    "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
  docs: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
};

test("Title is displayed", () => {
  render(<Home />);
  const title = screen.getByText(/welcome to nextjs/i);
  expect(title).toBeInTheDocument();
});

test("Renders correct navigation links", () => {
  render(<Home />);
  const links = screen.queryAllByRole("link");
  for (const el in nav) {
    const link = links.find(link =>
      link.textContent.match(new RegExp(el, "i"))
    );
    expect(link?.href).toBe(nav[el]);
  }
});
