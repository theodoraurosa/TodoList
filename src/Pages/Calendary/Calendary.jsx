
import React from "react";
import "./Calendary.css"; 

const Calendary = () => {
    return (
      <div className="container">
         
          <header className="header">
              <h1>17 October 2023</h1>
            <div class="date-navigation">
              <button>Day</button>
              <button>Week</button>
              <button>Month</button>
            </div>
            <button class="add-new">Add New</button>
              </header>

        <section className="tasks-section">
              <div class="timeline">
            <div class="time-slot">
              <span>08:00 AM</span>
            </div>
            <div class="event" style="top: 40px; background-color: #d4edda;">
              Database create for company
            </div>
            <div class="time-slot">
              <span>10:00 AM</span>
            </div>
            <div class="event" style="top: 120px; background-color: #d1ecf1;">
              Meet work team
            </div>
            <div class="time-slot">
              <span>02:00 PM</span>
            </div>
            <div class="event" style="top: 220px; background-color: #f8d7da;">
              Database create for company
            </div>
          </div>
    </section> 
      </div>
    );
  };
  
  export default Calendary;
  