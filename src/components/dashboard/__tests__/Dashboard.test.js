import React from "react";
import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";
import mockDashboards from "./mockDashboards.json";

jest.mock("./mockDashboards.json", () => mockDashboards);

test("should render the DashboardCard components", () => {
  render(<Dashboard />);
  const dashboardCards = screen.getAllByRole("article");
  expect(dashboardCards).toHaveLength(5);
});

test("should display the error state when there is an error", () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.reject(new Error("Failed to fetch dashboards"))
  );

  render(<Dashboard />);
  const error = screen.getByRole("alert");
  expect(error).toBeInTheDocument();

  global.fetch = originalFetch;
});
