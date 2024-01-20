import { useEffect, useState } from "react";

// import React from 'react'

const FaqSec = (answer) => {
  const [isAnswer, setAnswer] = useState(false);
  useEffect(() => {
    setAnswer(answer === null ? "No" : answer.answer);
  }, [answer]);
  return (
    <div className="faq-point my-4">
      <h2>Q. Is there any restriction for the visitor?</h2>
      <h3>
        <span className="text-gray-400">Ans. </span>
        {isAnswer ? (
          <span className="text-white">{isAnswer}</span>
        ) : (
          <div className="ans-text">
            <textarea name="" placeholder="Post your ans..." />

            <button className="ans-btn">Post</button>
          </div>
        )}
      </h3>
    </div>
  );
};

export default FaqSec;
