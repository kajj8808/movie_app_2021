import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"
/* classs App 는 ReactComponet 라는말. 
의 뒤에는 많은것을 가지고있음 그중하나가 state
그리고 이건 return 을 가지고있지않음 */
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMoives = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMoives();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">loading</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
