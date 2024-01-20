import "./style.scss";
const UserProfile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#161618]">
      <div id="profile-div">
        <div className="self-info">
          <div id="profile-pic" className="bg-white"></div>
          <div id="contact-info">
            <div className="contact-info-writing">
              <p className="name">Mr. Hanra</p>
              <p className="contact">
                Contact No : <span>6464654656</span>
              </p>
              <p className="address">
                Address : <span> Sorisa,Kolkata ,WB</span>
              </p>
            </div>
            <div className="contact-info-operations">
              <button className="op-btn" id="add-room"></button>

              <button className="op-btn" id="edit-room"></button>
            </div>
          </div>
        </div>
        <div className="room-info">
          <div id="room-details"></div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
