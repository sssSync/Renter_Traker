// import React from 'react'
import InputField from "./InputField/InputField";
import ResultSec from "./ResultSec/ResultSec";
import "./style.scss";
const RightComp = () => {
  return (
    <div>
      <section className="input_section flex flex-col relative py-8">
        <InputField />
      </section>
      <section className="result_section pt-12 md:px-8 px-4">
        <ResultSec />
      </section>
    </div>
  );
};

export default RightComp;
