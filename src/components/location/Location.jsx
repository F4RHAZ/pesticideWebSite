import "./location.css";
import React from 'react';



function Location() {
    return (
        <div id="location-container">
          <div className="map">
          <iframe
            title="location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448947.853797068!2d36.61879064470438!3d-3.386925796322649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1829e5ab5a5dd37d%3A0x3c70d3a3e2ab31c!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1651745433422!5m2!1sen!2sus"
            width="100%"
            height="550"
            allowFullScreen=""
            loading="lazy"
            ></iframe>
          </div>
          <div className="address">
            <h3>Our Address</h3>
            <p>123 Main Street, Suite 200</p>
            <p>Arusha 10001</p>
            <p>Tanzania</p>
          </div>
        </div>
      );
    };

export default Location
