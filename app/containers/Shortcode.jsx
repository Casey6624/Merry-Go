import React, { Component } from "react";
import PropTypes from "prop-types";
import Scene from "../components/Scene";

export default class Shortcode extends Component {
  render() {
    return (
      <div className="Merry-Go-Container">
        <Scene
          imageUrl={
            "https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg"
          }
          overlayText="Scene One"
        />
      </div>
    );
  }
}

Shortcode.propTypes = {
  wpObject: PropTypes.object
};
