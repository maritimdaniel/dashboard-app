import React, { useState, useEffect, useMemo } from "react";
import DashboardItem from "./DashboardItem";
import arrowUpIcon from "./assets/arrow-up.png";
import arrowDownIcon from "./assets/arrow-down.png";
import whiteStarIcon from "./assets/whiteStar.png";
import yellowStarIcon from "./assets/yellowStar.png";

import classes from "./styles/DashboardCard.module.css";

const DashboardCard = React.memo(
  ({
    dashboard,
    expandedDashboardId,
    selectedFilter,
    starredDashboards,
    setStarredDashboards,
  }) => {
    const [dashboardItems, setDashboardItems] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(loading, error);

    useEffect(() => {
      const fetchDashboardItems = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `https://gist.githubusercontent.com/kabaros/da79636249e10a7c991a4638205b1726/raw/${dashboard.id}.json`
          );
          const data = await response.json();
          setDashboardItems(data.dashboardItems || []);

          // Update loading and error states
          setLoading(false);
          setError(null);
        } catch (error) {
          // Handle fetch error
          setLoading(false);
          setError(error);
          console.error("Error fetching dashboard items:", error);
        }
      };

      fetchDashboardItems();
    }, [dashboard.id]);

    // Filter dashboardItems based on the selected filter type
    const filteredDashboardItems = useMemo(() => {
      if (selectedFilter === "all") {
        return dashboardItems;
      }
      return dashboardItems.filter(
        (item) => item.type.toLowerCase() === selectedFilter
      );
    }, [dashboardItems, selectedFilter]);

    // Determine the starred state based on the starred dashboards array
    const isStarred = starredDashboards.some(
      (starredDashboard) => starredDashboard.id === dashboard.id
    );

    // Ensure that the first dashboard card is expanded on load
    useEffect(() => {
      if (dashboard.id === expandedDashboardId && !isExpanded) {
        setIsExpanded(true);
      }
    }, [dashboard.id, expandedDashboardId, isExpanded]);

    const handleExpandCollapseClick = () => {
      setIsExpanded(!isExpanded);

      // If the dashboard is being expanded, collapse all other dashboards
      // if (!isExpanded) {
      //   onDashboardCardClick(dashboard.id);
      // }
    };

    const handleStarButtonClick = () => {
      // Toggle the starred state and update the starred dashboards array
      const updatedStarredDashboards = starredDashboards.some(
        (starredDashboard) => starredDashboard.id === dashboard.id
      )
        ? starredDashboards.filter(
            (starredDashboard) => starredDashboard.id !== dashboard.id
          )
        : [...starredDashboards, { id: dashboard.id }];

      setStarredDashboards(updatedStarredDashboards);
      localStorage.setItem(
        "starredDashboards",
        JSON.stringify(updatedStarredDashboards)
      );

      // Notify the parent component about the change
      // onDashboardCardClick(dashboard.id);
    };

    return (
      <div className={`${classes.dashboardCardContainer} `}>
        <div className={classes.dashboardCardHeader}>
          <h2>{dashboard.displayName}</h2>
          <div className={classes.dashboardCardIconsWrapper}>
            <button
              className={classes.starButton}
              onClick={handleStarButtonClick}
            >
              {isStarred ? (
                <img src={yellowStarIcon} alt="star icon" />
              ) : (
                <img src={whiteStarIcon} alt="star icon" />
              )}
            </button>
            <button
              onClick={handleExpandCollapseClick}
              className={classes.expandCollapseButton}
            >
              {isExpanded ? (
                <img src={arrowUpIcon} alt="arrow icon" />
              ) : (
                <img src={arrowDownIcon} alt="arrow icon" />
              )}
            </button>
          </div>
        </div>

        <div className={classes.dashboardCardContent}>
          {isExpanded &&
            filteredDashboardItems.map((item) => (
              <DashboardItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    );
  }
);
export default DashboardCard;
