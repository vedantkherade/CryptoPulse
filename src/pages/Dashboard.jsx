import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import Tabs from '../components/Dashboard/Tabs/Tabs'
import axios from 'axios';

function Dashboard() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res) => {
      console.log("res>>>", res);
      setCoins(res.data);
    })
    .catch((err) => {
      console.log("err>>>", err);
    })
  }, [])

  return (
    <div>
      <Header/>
      <Tabs coins={coins}/>
    </div>
  )
}

export default Dashboard
