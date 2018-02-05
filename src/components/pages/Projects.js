import React from "react";
import { NavLink, Route } from "react-router-dom";


import "./css/Project.css";



export const Projects = () => {
  return (
    <section className="projects">
      <p className="projectsp">
      <h2 className="projectsp" id="p1"> Projects </h2>
      <h3 className="projectsp" id="p2"> Halen App </h3>
      Concert event app that uses geolocation to search the events around your area on the day of the event.
      <a href="https://github.com/DenizSka/HalenApp" className="projectsp"> More info </a>
      <h3 className="projectsp" id="p3"> Travel Log </h3>
      Travel site to let you search the top landmarks on your desired city.
      <a href="https://github.com/DenizSka/TravelLog" className="projectsp"> More info </a>
      <a href="https://travel-log-project3.herokuapp.com/" className="projectsp"> Live Link </a>
      <h3 className="projectsp" id="p4"> Rewind </h3>
      This website shows the top ten hits on your birth date.
      <a href="https://github.com/DenizSka/Rewind" className="projectsp"> More info </a>
      <a href="https://rewindapp.herokuapp.com/" className="projectsp"> Live Link </a>
      </p>
    </section>
  );
};
