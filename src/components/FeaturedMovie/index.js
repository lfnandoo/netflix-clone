import React from "react";
import "./styles.css";

export default ({ item }) => {
  console.log(item);
  const firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + "...";
  }

  let pointsStyle;
  if (item.vote_average >= 6) pointsStyle = { color: "#46d369" };
  if (item.vote_average < 6) pointsStyle = { color: "red" };

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points" style={pointsStyle}>
              {item.vote_average}{" "}
              <strong>point{item.vote_average !== 1 ? "s" : ""}</strong>
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">
              {item.number_of_seasons} season
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ► Play
            </a>
            <a href={`list/add/${item.id}`} className="featured--mylistbutton">
              + My list
            </a>
          </div>
          <div className="featured--genres">
            <strong>Genres: </strong>
            {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
};
