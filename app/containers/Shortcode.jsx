import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Scene from "../components/Scene";

export default function Shortcode(props) {
  const [scenes, setScenes] = useState(null);
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    setScenes([
      {
        imageUrl:
          "https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg",
        overlayText: "Scene One"
      },
      {
        imageUrl:
          "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
        overlayText: "Scene Two"
      },
      {
        imageUrl:
          "https://www.nationalgeographic.com/content/dam/photography/photos/000/000/6.ngsversion.1467942028599.adapt.1900.1.jpg",
        overlayText: "Scene Three"
      },
      {
        imageUrl:
          "https://i2.wp.com/www.globallandscapesforum.org/wp-content/uploads/2017/10/What-are-landscape_.jpg",
        overlayText: "Scene Four"
      }
    ]);
  }, []);

  useEffect(() => {
    if (!scenes) return;
    console.log(currSlide);
    console.log(scenes[currSlide]);
  }, [currSlide]);

  function handleSlideChange({ target }) {
    const { name } = target;
    if (name === "back") {
      if (currSlide === 0) {
        setCurrSlide(scenes.length);
      }
      setCurrSlide(currSlide - 1);
      return;
    }
    if (name === "next") {
      if (currSlide === scenes.length + 1) {
        setCurrSlide(0);
      }
      setCurrSlide(currSlide + 1);
    }
  }

  if (!scenes) return <div>Loading...</div>;

  return (
    <div className="Merry-Go-Container">
      <Scene
        imageUrl={scenes[currSlide].imageUrl}
        overlayText={scenes[currSlide].overlayText}
      />
      <div className="controlsContainer">
        <button
          className="controls"
          name="back"
          onClick={e => handleSlideChange(e)}
        >
          Back
        </button>
        <button
          className="controls"
          name="next"
          onClick={e => handleSlideChange(e)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};
