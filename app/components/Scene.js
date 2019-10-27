import React from "react";
//import Left from "../../assets/images/back.svg";
//import Right from "../../assets/images/next.svg";
//import Icons from "../../assets/images/Icons";
import { Back } from "../../assets/images/Icons";

const defaultImage =
  "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwie-KWs3rDlAhUb4OAKHRODB8AQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.nationalpetregister.org%2Fmp.php%3Fpt%3DBird&psig=AOvVaw2W94vDitDWnsGqMOY7jr5K&ust=1571863577160949";

export default function Scene({ imageUrl = defaultImage, overlayText = "" }) {
  return (
    <div
      className="sceneContainer"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1 className="overlayText">{overlayText}</h1>
    </div>
  );
}
