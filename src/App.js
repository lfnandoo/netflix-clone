import React from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeatureMovie";

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featureData, setFeatureData] = React.useState(null);

  React.useEffect(() => {
    const loadAll = async () => {
      // GET THE TOTAL LIST
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      // GET FEATURED
      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
    };

    loadAll();
  }, []);

  return (
    // HEADER
    // Trending
    // Lists
    // Footer
    <div className="page">
      {featureData && <FeaturedMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
