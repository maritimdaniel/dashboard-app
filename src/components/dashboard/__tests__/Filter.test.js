import React from "react";
import { render, screen } from "@testing-library/react";
import Filter from "../Filter";

test('heading "Dashboards" is present in the document', () => {
  render(<Filter />);
  const headingElement = screen.queryByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

test("Filter options label is present and accessible", () => {
  render(<Filter />);
  const filterOptionsLabel = screen.getByLabelText("Filter items");
  expect(filterOptionsLabel).toBeInTheDocument();
  expect(filterOptionsLabel).toHaveAttribute("for", "dashboard items");
  expect(filterOptionsLabel).toHaveTextContent("Filter items");
});

test("All filter options exist", () => {
  render(<Filter />);

  const allOption = screen.getByRole("option", { name: "All types" });
  expect(allOption).toBeInTheDocument();

  const visualizationOption = screen.getByRole("option", {
    name: "Visualization",
  });
  expect(visualizationOption).toBeInTheDocument();

  const mapOption = screen.getByRole("option", { name: "Map" });
  expect(mapOption).toBeInTheDocument();

  const textOption = screen.getByRole("option", { name: "Text" });
  expect(textOption).toBeInTheDocument();
});
