import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

test("renders all calculator app", () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/ /i);
  expect(linkElement).toBeInTheDocument();
});
