import Intro from "../../components/Intro/Intro";

// import React from 'react'

const Home = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient( ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), hsla(0, 0%, 100%, 0) 100% )",
      }}
    >
      <Intro />

      <div className="about mt-28" id="about"></div>
    </div>
  );
};

export default Home;
