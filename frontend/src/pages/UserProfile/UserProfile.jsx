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
              <button className="op-btn" id="add-room">
                Add
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(241,241,241,1)"
                >
                  <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM9 9.99998V16H15V9.99998H9ZM11 12H13V14H11V12Z"></path>
                </svg>
              </button>

              <button className="op-btn">
                {" "}
                Edit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(250,250,250,1)"
                >
                  <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                </svg>{" "}
              </button>
              <button className="op-btn">
                {" "}
                Delete
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgba(250,250,250,1)"
                >
                  <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z"></path>
                </svg>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="room-info"></div>
      </div>
    </div>
  );
};

export default UserProfile;
