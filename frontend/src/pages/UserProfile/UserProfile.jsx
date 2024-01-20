import "./style.scss";
const UserProfile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#161618]">
      <div id="profile-div">
        <div className="self-info">
          <div id="profile-pic" className=" flex justify-center items-center ">
            S
          </div>

          <div id="contact-info">
            <div className="contact-info-writing">
              <h1 className="name mb-4">Sayan Hanra </h1>
              <h3 className="det">
                Contact No : <span>6464654656</span>
              </h3>
              <h3 className="det">
                Address : <span> Sorisa,Kolkata ,WB</span>
              </h3>
            </div>
            <div className="contact-info-operations">
              <button className="op-btn" id="add-room"></button>

              <button className="op-btn" id="edit-room"></button>
            </div>
          </div>
        </div>
        <div className="room-info"></div>
      </div>
    </div>
  );
};

export default UserProfile;
