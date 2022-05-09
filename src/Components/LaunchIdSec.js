import React from "react";
import { Link } from "react-router-dom";

const LaunchIdSec = ({ launchData, index, elem, setlaunchId }) => {
  // Fetching name of launches to display in the table
  const generateName = (element, data) => {
    let launchElement = launchData.filter((x) => x.id === element);
    if (launchElement[0]) {
      return launchElement[0].name;
    }
  };

  return (
    <Link
      className="nav-link text-white"
      key={index}
      to="/launchitem"
      onClick={() => {
        setlaunchId(elem);
      }}
    >
      {generateName(elem, launchData)}
    </Link>
  );
};

export default LaunchIdSec;
