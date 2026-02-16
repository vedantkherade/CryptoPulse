import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import { IconButton } from "@mui/material";
import "./styles.css";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/">
            <p className="link">Home</p>
          </a>

          <a href="/">
            <p className="link">Compare</p>
          </a>

          <a href="/">
            <p className="link">Watchlist</p>
          </a>

          <a href="/">
            <p className="link">Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
