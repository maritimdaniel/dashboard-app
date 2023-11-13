import React from "react";
import visualizationIcon from "./assets/visualization-icon.png";
import mapIcon from "./assets/map-icon.png";
import textIcon from "./assets/text-icon.png";
import { render, screen } from "@testing-library/react";
import DashboardItem from "../DashboardItem";

test("Renders the correct icon for visualization item", () => {
  render(<DashboardItem item={{ type: "VISUALIZATION" }} />);

  const iconElement = screen.getByAltText("visualization icon");
  expect(iconElement.src).toBe(visualizationIcon);
});

test("Renders the correct icon for map item", () => {
  render(<DashboardItem item={{ type: "MAP" }} />);

  const iconElement = screen.getByAltText("map icon");
  expect(iconElement.src).toBe(mapIcon);
});

test("Renders the correct icon for text item", () => {
  render(<DashboardItem item={{ type: "TEXT" }} />);

  const iconElement = screen.getByAltText("text icon");
  expect(iconElement.src).toBe(textIcon);
});

test("Renders a separating line after each item", () => {
  render(<DashboardItem />);

  const lineElement = screen.getByRole("separator");
  expect(lineElement).toBeInTheDocument();
});
