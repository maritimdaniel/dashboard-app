import React from "react";
import visualizationIcon from "./assets/visualization-icon.png";
import mapIcon from "./assets/map-icon.png";
import textIcon from "./assets/text-icon.png";
import otherIcon from "./assets/other-icon.png";

import classes from "./styles/DashboardItem.module.css";
import Line from "../common/Line";

const DashboardItem = React.memo(({ item }) => {
  const itemType = item.type.toLowerCase();
  console.log(itemType);

  const icon = () => {
    switch (itemType) {
      case "visualization":
        return visualizationIcon;
      case "map":
        return mapIcon;
      case "text":
        return textIcon;
      default:
        return otherIcon;
    }
  };

  const content = () => {
    switch (itemType) {
      case "text":
        return <p className={classes.dashboardItemText}>{item.text}</p>;
      case "map":
        return <p className={classes.dashboardItemValue}>{item.map.name}</p>;
      case "visualization":
        return (
          <p className={classes.dashboardItemValue}>
            {item.visualization.name}
          </p>
        );
      default:
        return (
          <p className={classes.dashboardItemValue}>
            {`This is an item of type ${itemType}.`}
          </p>
        );
    }
  };

  return (
    <div className={classes.dashboardItemWrapper}>
      <div className={classes.dashboardItemcontent}>
        <img
          className={classes.dashboardItemIcon}
          src={icon()}
          alt={`${itemType} icon`}
        />
        <div className={classes.dashboardItemcontent}>{content()}</div>
      </div>
      <Line role="separator" />
    </div>
  );
});

export default DashboardItem;
