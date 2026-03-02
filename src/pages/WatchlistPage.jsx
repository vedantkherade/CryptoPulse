import React, { useEffect, useState } from "react";
import Loader from "../components/Common/Loader/Loader";
import Header from "../components/Common/Header/Header";
import Button from "../components/Common/Button/Button";
import Tabs from "../components/Dashboard/Tabs/Tabs";
import { get100Coins } from "../functions/get100Coins";
import Footer from "../components/Common/Footer/Footer";
import { Link } from "react-router-dom";


function WatchlistPage() {
  const coins = JSON.parse(localStorage.getItem("watchlist"));
  const [myWatchlist, setMyWatchlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const allCoins = await get100Coins();
    if (coins) {
      setMyWatchlist(allCoins.filter((item) => coins.includes(item.id)));
    }
    setLoading(false);
  };

  return (
    <div>
      {loading || !coins ? (
        <Loader />
      ) : (
        <div style={{ minHeight: "90vh" }}>
          {myWatchlist?.length == 0 || !coins ? (
            <div>
              <Header />
              <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
                No Items in the Watchlist
              </h1>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/dashboard">
                  <Button text={"Dashboard"} />
                </Link>
              </div>
            </div>
          ) : (
            <div style={{ height: "95vh" }}>
              <Header/>
              <Tabs coins={myWatchlist} isWatchlistPage={true} />
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WatchlistPage;