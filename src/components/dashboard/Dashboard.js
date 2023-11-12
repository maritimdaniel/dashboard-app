import { useState, useEffect } from "react";
import DashboardCard from "./DashboardCard";
import Filter from "./Filter";
import Line from "../common/Line";
import Loader from "../common/Loader";
import Error from "../common/Error";
import classes from "./styles/Dashbord.module.css";

const Dashboard = () => {
  const [dashboards, setDashboards] = useState([]);
  console.log(dashboards);
  const [expandedDashboardId, setExpandedDashboardId] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [starredDashboards, setStarredDashboards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboards = async () => {
      try {
        const response = await fetch(
          "https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/fa044f54e7a5493b06bb51da40ecc3a9cb4cd3a5/dashboards.json"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch dashboards");
        }

        const data = await response.json();
        setDashboards(data.dashboards);
        setLoading(false);

        // Set the first dashboard as the default selected dashboard
        setExpandedDashboardId(data.dashboards[0].id);

        // Initialize the starred dashboards state based on local storage
        const storedStarredDashboards =
          localStorage.getItem("starredDashboards");
        if (storedStarredDashboards) {
          setStarredDashboards(JSON.parse(storedStarredDashboards));
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchDashboards();
  }, []);

  const handleDashboardCardClick = (dashboardId) => {
    // Update the starred dashboards array based on the clicked dashboard
    const updatedStarredDashboards = starredDashboards.some(
      (starredDashboard) => starredDashboard.id === dashboardId
    )
      ? starredDashboards.filter(
          (starredDashboard) => starredDashboard.id !== dashboardId
        )
      : [...starredDashboards, { id: dashboardId }];

    setStarredDashboards(updatedStarredDashboards);
    localStorage.setItem(
      "starredDashboards",
      JSON.stringify(updatedStarredDashboards)
    );

    // Update the isExpanded property of all dashboards, making only the clicked dashboard expanded
    const updatedDashboards = dashboards.map((dashboard) => ({
      ...dashboard,
      isExpanded: dashboard.id === dashboardId,
    }));

    setDashboards(updatedDashboards);
    setExpandedDashboardId(dashboardId);
  };

  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={classes.dashboardContainer}>
      <Filter onFilterChange={handleFilterChange} />
      <Line />
      {dashboards.map((dashboard) => (
        <DashboardCard
          key={dashboard.id}
          dashboard={dashboard}
          selectedFilter={selectedFilter}
          expandedDashboardId={expandedDashboardId}
          starredDashboards={starredDashboards}
          setStarredDashboards={setStarredDashboards}
        />
      ))}
    </div>
  );
};

export default Dashboard;
