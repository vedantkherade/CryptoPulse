import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header/Header'
import Tabs from '../components/Dashboard/Tabs/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search/Search';
import PaginationComponent from '../components/Dashboard/Pagination/PaginationComponent';

function Dashboard() {

  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPaginatedCoins(coins.slice(previousIndex, previousIndex + 10));
  }

  const onSearchChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((item) => 
     item.name.toLowerCase().includes(search.toLowerCase())  ||
       item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((res) => {
      console.log("res>>>", res);
      setCoins(res.data);
      setPaginatedCoins(res.data.slice(0, 10));
    })
    .catch((err) => {
      console.log("err>>>", err);
    })
  }, [])

  return (
    <div>
      <Header/>
      <Search search={search} onSearchChange={onSearchChange}/>
      <Tabs coins={search ? filteredCoins : paginatedCoins}/>
      {!search && 
      <PaginationComponent page={page} handlePageChange={handlePageChange}/>
      }
      
    </div>
  )
}

export default Dashboard
