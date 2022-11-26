import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AnimeList from "./components/AnimeList";

function App() {

  const [animeList, setAnimeList] = useState([]); 
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState('Naruto');

  const getanimeData = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData = await temp.json()
    setAnimeList(resData.data);
  }

  useEffect(() => {
    getanimeData();

  }, [search])

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
        onChange={(e) => setSearch(e.target.value)} />
      </div>
    </div>

    <div className="container">
      <div className="animeInfo">
        <div className="row">
          <AnimeList />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
