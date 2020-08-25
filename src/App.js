import React from "react";
import Tmdb from "./Tmdb";

function App() {
  const [movieList, setMovieList] = React.useState([]);

  React.useEffect(() => {
    const loadAll = async () => {
      // GET THE TOTAL LIST
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    // HEADER
    // Trending
    // Lists
    // Footer
    <div></div>
  );
}

export default App;
