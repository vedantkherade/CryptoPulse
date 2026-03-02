import React, { useEffect, useState } from "react";
import { Switch, Drawer, IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./styles.css";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode((prev) => !prev);
    toast.success("Theme Changed!");

    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <Link to="/"><p className="link">Home</p></Link>
          <Link to="/compare"><p className="link">Compare</p></Link>
          <Link to="/watchlist"><p className="link">Watchlist</p></Link>
          <Link to="/dashboard"><p className="link">Dashboard</p></Link>

          {/* THEME TOGGLE */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch checked={darkMode} onChange={changeMode} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}