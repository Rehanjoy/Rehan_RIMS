/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Stats.css";
import CountUp from "react-countup";

function Stats() {
  return (
    <div className="d-flex row ">
      <div className="col-lg-4 col-md-4 col-sm-4 imgs">
        <span>
          <span className="imgs">
            <img src="../public/images/docimg4.png" alt="" />
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
            <img src="../public/images/docimg1.png" alt="" />
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
            <img src="../public/images/docimg3.png" alt="" />
          </span>
          <span className="count-text justify-content-center d-flex">
            <CountUp start={120} end={200} duration={80} />+
          </span>
          <p className="count-text2">Doctor's Team </p>
        </span>
      </div>

      {/* 
      <div classNameName="d-flex flex-column top-stat">
          <h1 classNameName="stat"></h1>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column col statcl">
           <div className="imgs">
           <img src="../public/images/docimg1.png" alt="" />
           <h1>
      <CountUp start={8800} end={9000} duration={60} />
    +
    </h1>
            <p>Satisfied Patients</p> 
            
           </div>
            
          </div>
          <div className="d-flex flex-column col statcl">
            
            <div className="imgs">
           <img src="../public/images/docimg3.png" alt="" />
           <h1>
      <CountUp start={8800} end={9000} duration={40} />
      +
      </h1>
            <p>Doctor Team </p>
           </div>
          </div>
          <div className="d-flex flex-column col statcl">
            
            <div className="imgs">
           <img src="../public/images/docimg4.png" alt="" />
           <h1>
      <CountUp start={8800} end={9000} duration={40} />
      +
      </h1>
            <p>Success Mission</p>
           </div>
          </div>
          <div className="d-flex flex-column col statcl">
            
            <div className="imgs">
           <img src="../public/images/docimg5.png" alt="" />
           <h1>
      <CountUp start={8800} end={9000} duration={40} />
      +
      </h1>
            <p>Successfull Surgeries</p>
           </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Stats;
