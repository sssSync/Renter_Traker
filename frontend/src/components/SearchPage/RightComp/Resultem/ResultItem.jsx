// import React from 'react'
import "./result_style.scss";

import roomImg from "../../../../assets/room-img/room.jpg";

const ResultItem = () => {
  return (
    <div className="room-box flex justify-between">
      <div className="details flex flex-col p-8 flex-grow">
        <h1 className="room_title">Hawas-Vila</h1>
        <div className="mini_details">
          <h3 className="room_det">
            <span>Price: </span>₹ 12,50/month
          </h3>
          <div className="flex gap-4">
            <h3 className="room_det">
              <span>Type: </span>Family/PG
            </h3>
            <h3 className="room_det">
              <span>people: </span>3/room
            </h3>
          </div>
          <h3 className="room-det">
            <span>Address: </span>
            Sorisha, Diamond Harbour, South 24 porgona, 721148
          </h3>
        </div>
      </div>

      <div className="room-img flex-grow-0">
        <img src={roomImg} alt="" />
      </div>
    </div>
  );
};

export default ResultItem;
