/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";

function App() {

  const [animeList, setAnimeList] = useState([]); 
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState('');

  const getanimeData = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await temp.json()
    setAnimeList(resData.data);
  }

  useEffect(() => {
    getanimeData();

  }, [search])

  function handleChange(event) {
    const newValue = event.target.value;
    setSearch(newValue);
  }

  return (
    <>
    <div className="App">
      <Header />
      <div className="contant-wrap">
        <NavBar 
          animeData={animeData}/>
      </div>
      <div className="search-box">
        <input type="search" placeholder="Search your anime"
        onChange={handleChange} value={search}/>
      </div>
    </div>

    <div className="container">
      <div className="animeInfo">
        <div className="row">
          <AnimeList animeList={animeList}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
