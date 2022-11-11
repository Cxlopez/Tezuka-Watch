import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {

  const [animeList, setAnimeList] = useState([]); 
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <Header />
      <div className="contant-wrap">
        <Cards 
          topAnime={topAnime}/>
      </div>
    </div>
  );
}

export default App;
