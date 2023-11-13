import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../Filter";

test("should display the 'Filter items' label", () => {
  render(<Filter />);
  const filterLabel = screen.getByLabelText("Filter items");
  expect(filterLabel).toBeInTheDocument();
});

test("should render the filter select options", () => {
  render(<Filter />);
  const filterOptions = screen.getAllByRole("option");
  expect(filterOptions).toHaveLength(4);
});

test("should display the default selected filter option", () => {
  render(<Filter />);
  const selectedOption = screen.getByRole("option", { selected: true });
  expect(selectedOption.textContent).toBe("All types");
});

test("should update the selected filter option on change", () => {
  render(<Filter />);
  const visualizationOption = screen.getByRole("option", {
    name: "Visualization",
  });
  fireEvent.click(visualizationOption);

  const selectedOption = screen.getByRole("option", { selected: true });
  expect(selectedOption.textContent).toBe("Visualization");
});
