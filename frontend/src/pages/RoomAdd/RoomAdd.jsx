// import React from 'react'
import "./add_style.scss";
const RoomAdd = () => {
  return (
    <div className="main-add-page">
      <h1 className="add-msg">Add Your Room</h1>
      <form action="" className="mt-40">
        <div className="mainForm">
          <div className="owner-details">
            <h2 className="header-tag">Owner</h2>
            <input type="text" placeholder="Enter Name" className="input" />
            <input type="text" placeholder="Enter Phone" className="input" />
            <input type="text" placeholder="Enter E-mail" className="input" />
          </div>
          <div className="room-details">
            <h2 className="header-tag">Room</h2>
            <div className="tp">
              <input type="text" placeholder="Enter Title" className="input" />
              <input type="text" placeholder="Enter Price" className="input" />
            </div>
            <div className="allcheck">
              <div className="availability">
                <span>IsAvailable</span>
                <input type="checkbox" />
              </div>
              <div className="stud">
                <span>IsStudent</span>
                <input type="checkbox" />
              </div>
              <div>
                <span>wifi </span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Food </span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Bed </span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Kitchen-Facility</span>
                <input type="checkbox" />
              </div>
              <div>
                <span>Drinking-Water </span>
                <input type="checkbox" />
              </div>
            </div>
            <div className="alldrop">
              <div className="toilet">
                <span>ToiletType</span>
                <select>
                  <option>Isolate</option>
                  <option>Shared</option>
                </select>
              </div>
              <div className="roomtype">
                <span>RoomType </span>
                <select>
                  <option value="">Single</option>
                  <option value="">Double</option>
                  <option value="">Multiple</option>
                </select>
              </div>
              <div className="forwhom">
                <span>ForWhom </span>
                <select>
                  <option value="">Boy</option>
                  <option value="">Girl</option>
                  <option value="">Both</option>
                </select>
              </div>
              <div className="buildingType">
                <span>BuildingType</span>
                <select>
                  <option value="">Mess</option>
                  <option value="">Family</option>
                </select>
              </div>
            </div>
            <div className="textarea">
              <textarea className="desc" placeholder="Enter More details"></textarea>
            </div>
          </div>
          <div className="location">
            <h2 className="header-tag">Location</h2>
            <div className="room-address">
              <input type="text" placeholder="Enter District" />
              <input type="text" required placeholder="Enter State" />
              <input type="text" required placeholder="Enter City" />
              <input type="text" required placeholder="Enter PIN" />
              <input type="text" required placeholder="Enter Sector" />
            </div>

            <div className="land">
              <textarea placeholder="Enter Landmarks*"></textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RoomAdd;
