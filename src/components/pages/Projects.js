import React from "react";
import { NavLink, Route } from "react-router-dom";
import img from "../img/concert.jpg";
import imgtwo from "../img/travel.jpg";
import imgthree from "../img/boombox.jpg";
import imgfour from "../img/pexels.jpg";
import imgfive from "../img/ilke.jpg";
import imgsix from "../img/hangman.jpg";

import "./css/Project.css";



export const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projectid"> Projects </h2>
      <div className="project" id="project2">
       <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgfive})` }} alt="Ilke Teacher"> </div>
        <h3 className="project" id="projecth3"> Ilke Teacher </h3>
        <p className="project" id="projectp">Portfolio page for architecture teacher Ilke and also a platform for her students to download all the homework and submit it back to her</p>
        <a className="project" id="projecta" target="_blank" href="https://github.com/DenizSka/IlkeTeacher" > More info </a> |
        <a className="project" id="projecta" target="_blank" href="http://www.ilkeciritci.com" > Live Link </a>
      </div>
      <div className="project" id="project5">
       <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgsix})` }} alt="Travel Log"> </div>
        <h3 className="project" id="projecth5"> Hang URL </h3>
        <p className="project" id="projectp">Classic hangman game built only for developers. </p>
        <a className="project" id="projecta" target="_blank" href="https://github.com/DenizSka/HangUrl" > More info </a> |
        <a className="project" id="projecta" target="_blank" href="https://hangurl.herokuapp.com/" > Live Link </a>
      </div>
      <div className="project" id="project3">
       <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgthree})` }} alt="Travel Log"> </div>
        <h3 className="project" id="projecth3"> Rewind </h3>
        <p className="project" id="projectp">This website shows the top ten hits on your birth date.</p>
        <a href="https://github.com/DenizSka/Rewind" className="project" id="projecta" target="_blank"> More info </a> |
        <a href="https://rewindapp.herokuapp.com/" className="project" id="projecta" target="_blank"> Live Link </a>
      </div>
      <div className="project" id="project4">
       <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgfour})` }} alt="Travel Log"> </div>
        <h3 className="project" id="projecth3"> Brighter Together </h3>
        <p className="project" id="projectp"> I built this website for this non-profit organization using React.js.</p>
        <a href="https://github.com/DenizSka/brightertogetherny.github.org" target="_blank" className="project" id="projecta"> More info </a> |
        <a href="http://www.brightertogetherny.org/" target="_blank" className="project" id="projecta"> Website </a>
      </div>
      <div className="project" id="project1">
          <div className="project" id="projectinimg" style={{ backgroundImage: `url(${img})` }} alt="HalenApp"> </div>
        <h3 className="project" id="projecth3"> Halen App </h3>
        <p className="project" id="projectp">Concert event app that uses geolocation to search the events around your area on the day of the event. </p>
        <a className="project" id="projecta" href="https://github.com/DenizSka/HalenApp" target="_blank"> More info </a>
      </div>
      <div className="project" id="project6">
        <div className="project" id="projectinimg" style={{ backgroundImage: `url(${imgtwo})` }} alt="Travel Log"> </div>
          <h3 className="project" id="projecth6"> Travel Log </h3>
          <p className="project" id="projectp">Travel site to let you search the top landmarks on your desired city.</p>
          <a className="project" id="projecta" href="https://github.com/DenizSka/TravelLog" target="_blank"> More info </a> |
          <a className="project" id="projecta" href="https://travel-log-project3.herokuapp.com/" target="_blank"> Live Link </a>
        </div>
    </div>
  );
};
