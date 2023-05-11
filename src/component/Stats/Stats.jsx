
import React from "react";
import "./Stats.css";
import CountUp from "react-countup";

function Stats() {
  return (
    <div className="d-flex row ">
      <div className="col-lg-4 col-md-4 col-sm-4 imgs">
        <span>
          <span className="imgs">
            <img src="../public/docimg4.png" alt="" />
          </span>
          <span className="count-text justify-content-center d-flex">
            <CountUp start={8800} end={9000} duration={80} />+
          </span>
          <p className="count-text2">Success Mission</p>
        </span>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-4 imgs ">
        <span>
          <span className="imgs">
            <img src="../public/docimg1.png" alt="" />
          </span>
          <span className="count-text justify-content-center d-flex">
            <CountUp start={8800} end={9000} duration={100} />+
          </span>
          <p className="count-text2">Satisfied Patients</p>
        </span>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-4 imgs">
        <span>
          <span className="imgs">
            <img src="../public/docimg3.png" alt="" />
          </span>
          <span className="count-text justify-content-center d-flex">
            <CountUp start={120} end={200} duration={80} />+
          </span>
          <p className="count-text2">Doctors Team </p>
        </span>
      </div>

      
    </div>
  );
}

export default Stats;
