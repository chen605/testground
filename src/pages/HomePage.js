import React from "react";
import requests from "../axios/Request";
import MovieList from "../components/MovieList";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "../styles/HomePage.css";

function HomePage() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="home">
      <div className="home__container">
        <AutoplaySlider
          style={{ height: "400px", zIndex: "0" }}
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={5000}
        >
          <div data-src="https://wallpaperaccess.com/full/3768349.jpg" />
          <div data-src="https://imgproxy.geocaching.com/4eba346ce1433b1ed62b9668831225b482e764af?url=https%3A%2F%2Fwww.kpn.com%2Fupload_mm%2F4%2F9%2Fb%2Fcid42375_81012311_lcdpS4_sdp_na_es-es_2520200316-6353-1uc3qyr.jpg" />
          <div data-src="https://i2.wp.com/www.moviepulp.be/wp-content/uploads/2021/01/Fate-Winx-Saga-banner-op-Netflix-Belgie.jpg?fit=1920%2C780&ssl=1" />
          <div data-src="https://images.hdqwalls.com/download/the-umbrella-academy-season-2-2020-lo-1920x1080.jpg" />
          <div data-src="https://vignette.wikia.nocookie.net/riverdalearchie/images/2/20/Chilling_Adventures_of_Sabrina_Official_Banner.jpg/revision/latest?cb=20180916192837" />
        </AutoplaySlider>

        <MovieList
          title="Featured"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
      </div>
    </div>
  );
}

export default HomePage;
