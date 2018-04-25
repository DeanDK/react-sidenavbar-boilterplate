import React from "react";
import { Link } from "react-router-dom";

import FontAwesome from "react-fontawesome";
import style from "./sideNav.css";

const SideNavItems = () => {
  return (
    <div>
      <div className={style.option}>
        <Link to="/">
          <FontAwesome name="home" />
          Home
        </Link>
      </div>
    </div>
  );
};

export default SideNavItems;
