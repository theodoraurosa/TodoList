import React from "react";

import "./Home.css";
import { CgSearch, CgFormatJustify, CgChevronDoubleRight, CgMenuBoxed ,  CgAlbum ,  CgFormatCenter,  CgAdd } from "react-icons/cg";
import {  FaSignOutAlt } from "react-icons/fa";
import { BiCalendarEvent, BiTask } from "react-icons/bi";

const Home = () => {
    return (

      <div >
       
          <h1>Welcome to ToDoPy</h1>
          <p>
          A to-do app is a simple, user-friendly digital tool designed to help 
          individuals and teams organize tasks and manage their daily activities efficiently.
          Users can create, edit, and prioritize tasks, set deadlines or reminders, 
          categorize items, and track their progress, all within an intuitive and accessible interface.
            </p>
            
        <button>Go to tasks</button> 
     
      </div>
      
    );
};

export default Home;