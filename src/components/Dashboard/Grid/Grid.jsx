import React, { useState } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";

function Grid({ coin }) {
 
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        {/* Top Section */}
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />

          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>

          {/* WATCHLIST BUTTON */}
          <IconButton
            onClick={(e) => {
              e.preventDefault(); // prevents navigation

              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                sx={{ fontSize: "1.8rem" }}
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0
                    ? "watchlist-icon-red"
                    : ""
                }`}
              />
            ) : (
              <StarBorderRoundedIcon
                sx={{ fontSize: "1.8rem" }}
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0
                    ? "watchlist-icon-red"
                    : ""
                }`}
              />
            )}
          </IconButton>
        </div>

        {/*  Price Change */}
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h?.toFixed(2) ?? "0.00"}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h?.toFixed(2) ?? "0.00"}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}

        {/*  Bottom Info */}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>

          <p className="total_volume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>

          <p className="total_volume">
            Market Cap : ${coin.market_cap.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default Grid;
