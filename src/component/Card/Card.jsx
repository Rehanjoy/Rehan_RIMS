
import React from "react";

import "./Card.css";

function Card() {
  return (
    <>
      <div className="top-cardss ">
        <div className="d-flex row cards">
          {/* for Left section */}

          <div className="col-lg-6 col-md-6 col-sm-12 row cd">
              <h1>Facilities & Services</h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate animi pariatur expedita vero odit, quos aut Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis aut eos natus est odio quod omnis totam asperiores mollitia ea laboriosam neque cupiditate, iure itaque voluptatem vitae sequi impedit!
              </h4>
              <form onSubmit={(event) => event.preventDefault()} role="search">
                <label className="search-bar" htmlFor="search">
                  Search for stuff
                </label>
                <input
                  id="search"
                  type="search"
                  placeholder="Search..."
                  autoFocus
                  required
                />
                <button className="buttons" type="submit"></button>
              </form>
            
          </div>

          {/* for RIght section image part */}
          <div className="col-lg-6 col-md-6 col-sm-12 cards-img">
            
            
              <img
                className="aamish"
                src="../public/sl31.jpg"
                alt="doc"
              />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
