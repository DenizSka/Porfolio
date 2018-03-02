import React from "react";
import img from "../img/deniz.png";
import "./css/Home.css";

export const Home = () => {
  return (
    <div className="aboutme">
    <div className="aboutcopy">
      <h2 className="abouth2" id="h2home"> About Me </h2>
      <p className="aboutp">
        Born and raised in Istanbul, living in New York.  A lifetime of travel has solidified my ambition to meet daring goals and given me flexibility in dealing with what life throws my way. As a former marketing specialist I learned to understand customer’s perspective, how to be resourceful and solve problems. I am at my happiest when I am merging my technological and creative skills to create beautiful, thoughtful websites. From building full-stack applications to researching new and emerging tech, I use my love of coding to build value for any company I work with.
      </p>

    <div className="aboutimg"> <div className="imgitem" style={{ backgroundImage: `url(${img})` }} alt="aboutme"/> </div>
    </div>
</div>
  );
};
