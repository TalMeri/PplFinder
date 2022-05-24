import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const NavBar = () => {
  const currentTab = () => {
    const path = location.pathname;
    if (path === "/") return 0;
    else if (path === "/Favorites") return 1;
};  
  const [value, setValue] = useState(currentTab);

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "relative", top: 0 }}>     
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab  label="Home" index={0} component={Link} to={"/"}  />
        <Tab label="Favorites" index={1} component={Link} to={"/Favorites"} />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
