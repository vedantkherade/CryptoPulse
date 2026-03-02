import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid/Grid";
import List from "../List/List";
import Button from "../../Common/Button/Button";
import "./styles.css";

export default function Tabs({ coins, setSearch }) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3A80E9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        {/* GRID TAB */}
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.length === 0 ? (
              <div className="no-items">
                <h1>No Items Found</h1>
                <Button text="Clear Search" onClick={() => setSearch("")} />
              </div>
            ) : (
              coins.map((coin, i) => <Grid key={i} coin={coin} />)
            )}
          </div>
        </TabPanel>

        {/* LIST TAB (FIXED) */}
        <TabPanel value="list">
          {coins.length === 0 ? (
            <div className="no-items">
              <h1>No Items Found</h1>
              <Button text="Clear Search" onClick={() => setSearch("")} />
            </div>
          ) : (
            <table className="list-table">
              {coins.map((item, i) => (
                <List coin={item} key={i} />
              ))}
            </table>
          )}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}