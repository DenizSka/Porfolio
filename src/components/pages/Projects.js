import React from "react";
import { NavLink, Route } from "react-router-dom";


import "./css/Project.css";



export const Projects = () => {
  return (
    <div className="projects">
    <h2 className="projectid"> Projects </h2>
      <div className="projectid" id="p1">
        <h3 className="projectid"> Halen App </h3>
        <p className="projectid">Concert event app that uses geolocation to search the events around your area on the day of the event. </p>
        <a href="https://github.com/DenizSka/HalenApp" id="p1" className="projectid"> More info </a>
      </div>
      <div className="projectid" id="p2">
        <h3 className="projectid"> Travel Log </h3>
        Travel site to let you search the top landmarks on your desired city.
        <a href="https://github.com/DenizSka/TravelLog" id="p2" className="projectid"> More info </a> |
        <a href="https://travel-log-project3.herokuapp.com/" id="p2" className="projectid"> Live Link </a>
      </div>
      <div className="projectid" id="p3">
        <h3 className="projectid"> Rewind </h3>
        This website shows the top ten hits on your birth date.
        <a href="https://github.com/DenizSka/Rewind" id="p3" className="projectid"> More info </a> |
        <a href="https://rewindapp.herokuapp.com/" id="p3" className="projectid"> Live Link </a>
      </div>
    </div>
  );
};
