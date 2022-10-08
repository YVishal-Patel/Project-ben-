import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import '../About/Demo.css'


export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
      return (
        <div className="main-carousal-div">
          <Slider {...settings}>
            <div className="road-map ">
              <div className="road-map-data firstData firstDATa">
                <p className="map-head">Phase 4</p>
                <p className="map-small-head">Running Adventure State (PvE)</p>
                <p className="map-small-head">Daily Quest System Character </p>
                <p className="map-small-head">Leaderboard</p>
                <p className="map-small-head">Biosphere Metaverse</p>
                <p className="map-small-head">Game Launch on Desktop </p>
              </div>
            </div>
            <div className="road-map">
            <div className="road-map-data firstDATa">
                <p className="map-head">Phase 5</p>
                <p className="map-small-head">Running Adventure State (PvE)</p>
                <p className="map-small-head">Daily Quest System Character </p>
                <p className="map-small-head">Leaderboard</p>
                <p className="map-small-head">Biosphere Metaverse</p>
                <p className="map-small-head">Game Launch on Desktop </p>
              </div>
            </div>
            
            <div className="road-map">
            <div className="road-map-data">
                <p className="map-head">Phase 1</p>
                <p className="map-small-head">Running Adventure State (PvE)</p>
                <p className="map-small-head">Daily Quest System Character </p>
                <p className="map-small-head">Leaderboard</p>
                <p className="map-small-head">Biosphere Metaverse</p>
                <p className="map-small-head">Game Launch on Desktop </p>
              </div>
            </div>
            <div className="road-map">
            <div className="road-map-data">
                <p className="map-head">Phase 2</p>
                <p className="map-small-head">Running Adventure State (PvE)</p>
                <p className="map-small-head">Daily Quest System Character </p>
                <p className="map-small-head">Leaderboard</p>
                <p className="map-small-head">Biosphere Metaverse</p>
                <p className="map-small-head">Game Launch on Desktop </p>
              </div>
            </div>
            <div className="road-map">
            <div className="road-map-data">
                <p className="map-head">Phase 3</p>
                <p className="map-small-head">Running Adventure State (PvE)</p>
                <p className="map-small-head">Daily Quest System Character </p>
                <p className="map-small-head">Leaderboard</p>
                <p className="map-small-head">Biosphere Metaverse</p>
                <p className="map-small-head">Game Launch on Desktop </p>
              </div>
            </div>
            <div className="road-map">
            <div className="road-map-data">
                <p className="map-head">Phase 1</p>
                <p className="map-small-head">Running Adventure State (PvE)</p>
                <p className="map-small-head">Daily Quest System Character </p>
                <p className="map-small-head">Leaderboard</p>
                <p className="map-small-head">Biosphere Metaverse</p>
                <p className="map-small-head">Game Launch on Desktop </p>
              </div>
            </div>


           
          </Slider>
        </div>
      );
    }
}




