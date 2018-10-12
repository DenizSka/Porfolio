import React from "react";
import img from "../img/deniz.png";
import "./css/Home.css";

export const Home = () => {
  return (
    <div className="aboutme">
    <div className="aboutcopy">
      <h2 className="abouth2" id="h2home"> About Me </h2>
      <p className="aboutp">
        As an aspiring software engineer coming from client-facing work environments, I bring valuable skills like managing teams and problem solving. I plan to continue my development by helping other companies and groups form applications and ultimately become a fulltime professional developer.
      </p>

    <div className="aboutimg"> <div className="imgitem" style={{ backgroundImage: `url(${img})` }} alt="aboutme"/> </div>
    </div>
</div>
  );
};
