import { Link } from "react-router-dom";
import ResultItem from "../Resultem/ResultItem";

// import React from 'react'

const ResultSec = () => {
  return (
    <section>
      {/* <h1 className="text-5xl pt-20 text-center text-gray-400">No Data Found</h1> */}
      <Link to="/room/23">
        <ResultItem />
      </Link>
      <Link to="/room/233">
        <ResultItem />
      </Link>
      <Link to="/room/2453">
        <ResultItem />
      </Link>
    </section>
  );
};

export default ResultSec;
