import { render, screen } from "@testing-library/react";
import MainComponent from ".";

test("renders the initial message", () => {
  render(<MainComponent />);
  const linkElement = screen.getByText(/hello user/i);
  expect(linkElement).toBeInTheDocument();
});
