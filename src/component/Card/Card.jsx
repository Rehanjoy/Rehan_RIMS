// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Card.css";

function Card() {
  return (
    <>
      <div className="top-cardss ">
        <div className="d-flex row cards">
          {/* for Left section */}

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column  justify-content-center card-text input-btn">
              <h1>Facilities & Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate animi pariatur expedita vero odit, quos aut
              </p>
              <form onSubmit={(event) => event.preventDefault()} role="search">
                <label className="search-bar" htmlFor="search">Search for stuff</label>
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
          </div>

          {/* <div className="card-text d-flex flex-column ">
            <h1>Facilities & Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate animi pariatur expedita vero odit, quos aut repudiandae
              excepturi laudantium asperiores enim perspiciatis culpa provident
              vitae, praesentium id consequatur veniam neque?
            </p>
            <div className="d-flex flex-column input-btn">
              <form onSubmit={(event) => event.preventDefault()} role="search">
                <label htmlFor="search">Search for stuff</label>
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
          </div> */}

          {/* for RIght section image part */}

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex cards-img">
              {/* <img src="https://thumbs.dreamstime.com/b/young-team-group-doctors-37813851.jpg" alt="" /> */}
              <img className="aamish"
                src="https://media.istockphoto.com/id/512278456/photo/group-of-doctors-at-the-hospital.jpg?s=170667a&w=0&k=20&c=XKMi1xsHzVJ8JJzQZfGYJooqBJitZT0MDs4W4usP4eg="
                alt=""
              />
            </div>
          </div>

          {/* <div className="cards-img d-flex">
          <img src="../public/Images/doctor-img.jpg" alt="" />
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Card;
