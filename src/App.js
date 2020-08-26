import React from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";

function App() {
  const [movieList, setMovieList] = React.useState([]);
  const [featureData, setFeatureData] = React.useState(null);
  const [blackHeader, setBlackHeader] = React.useState(false);

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
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);
    };

    loadAll();
  }, []);

  React.useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) setBlackHeader(true);
      else setBlackHeader(false);
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featureData && <FeaturedMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤
        </span>{" "}
        by <a href="https://github.com/lfnandoo">Luiz Fernando</a>. <br />
        Image rights for Netflix <br />
        Data by website Themoviedb.org
      </footer>
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif"
            alt="Loading"
          />
        </div>
      )}
    </div>
  );
}

export default App;
