// import React from 'react'

const InputField = () => {
  return (
    <div>
      <div className="search_box flex gap-8 px-8 items-center pl-32">
        <div className="input flex">
          <div className="search_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="rgba(255,255,255,0.89)"
            >
              <path
                d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"
                fill="#eaeaeab5"
              ></path>
            </svg>
          </div>
          <input type="text" name="address" id="" placeholder="Enter Address..." />
        </div>
        <div className="submit_btn">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default InputField;
