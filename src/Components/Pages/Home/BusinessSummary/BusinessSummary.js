import React from "react";
import CountUp from "react-countup";

const BusinessSummary = ({ countUpRef }) => {
  return (
    <div>
      <h1>Business summary</h1>
      <CountUp
        className="text-3xl"
        start={0}
        end={100}
        enableScrollSpy
      ></CountUp>
    </div>
  );
};

export default BusinessSummary;
