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

      <div className="about mt-28" id="about">
        <h1 className="text-[3rem]"> Why Us? -</h1>
        Our platform simplifies the mess search for students, providing personalized options based
        on location, price, and amenities. Mess owners benefit from an easy-to-use app, enabling
        hassle-free room advertising with customized profiles and terms
      </div>
      <div className="about">
        <h1>How it works? -</h1>
        -You can search in out platform by landmark or address -Then you get all the mess and houses
        based on that reviews and feedbacks -By clicking any mess,You get all the information about
        the mess with the contact details of room-owner -In the end you can get question-answer faq
        flexibility For Room owners -For advertise any room you need to take subscription of our
        platform
      </div>
      <div className="about">
        <h1>For Room owners -</h1>
        -For advertise any room you need to take subscription of our platform
      </div>
    </div>
  );
};

export default Home;
