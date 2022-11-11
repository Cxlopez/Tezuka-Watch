import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {

  const [animeList, setAnimeList] = useState([]); 
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  const getTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=Naruto&limit=20`)
    const resData = await temp.json()
    setAnimeList(resData.data);
  }

  useEffect(() => {
    getTopAnime();

  }, [])

  return (
    <div className="App">
      <Header />
      <div className="contant-wrap">
        <NavBar 
          topAnime={topAnime}/>
      </div>
    </div>
  );
}

export default App;
