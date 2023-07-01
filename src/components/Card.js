import React from "react";

export default function Card(props) {
  return (
    <div className="container">
      <img src={props.data.imageUrl} alt="" className="pic" />
      <div className="info">
        <div className="location">
          <img
            src="https://w7.pngwing.com/pngs/457/630/png-transparent-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-heart.png"
            alt=""
            className="location--img"
          />
          <span>{props.data.location.toUpperCase()}</span>
          <a href={props.data.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>
        <h2>{props.data.title}</h2>
        <p className="date">
          {props.data.startDate} - {props.data.endDate}
        </p>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
