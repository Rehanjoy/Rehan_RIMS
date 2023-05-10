// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";

function Header() {
  return (
<>


<header id="header">
		<img src="../public/Images/logoo.png" alt="logo" id="header-img" />
		<h1>Rajendra Institute of Medical Sciences</h1>
    <div className="btns">
    <button className="nav-button mx-2"><span></span>Login</button>
    <button className="nav-button"><span></span>SignUp</button>
  </div>
		<nav id="nav-bar">
			<ul>
				<li className="dropdown">
          <a className="nav-link" href="#">About US &#9662;</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
        
				<li className="dropdown">
          <a className="nav-link" href="#">Academics &#9662;</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
				<li className="dropdown">
          <a className="nav-link" href="#">Departments &#9662;</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
				<li className="dropdown">
          <a className="nav-link" href="#">Specialities &#9662;</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
          <li className="dropdown">
            <a className="nav-link" href="#">Patient &#9662;</a>
            <ul className="dropdown-content">
              <li><a className="dropdown-a" href="#">Undergraduate</a></li>
              <li><a className="dropdown-a" href="#">Graduate</a></li>
              <li><a className="dropdown-a" href="#">Continuing</a></li>
            </ul>
        </li>
        <li className="dropdown">
          <a className="nav-link" href="#">Facilities & Services &#9662;</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
      </li>
      <li className="dropdown">
        <a className="nav-link" href="#">Info Desk &#9662;</a>
        <ul className="dropdown-content">
          <li><a className="dropdown-a" href="#">Undergraduate</a></li>
          <li><a className="dropdown-a" href="#">Graduate</a></li>
          <li><a className="dropdown-a" href="#">Continuing</a></li>
        </ul>
    </li>
    <li className="dropdown">
      <a className="nav-link" href="#">Media &#9662;</a>
      <ul className="dropdown-content">
        <li><a className="dropdown-a" href="#">Undergraduate</a></li>
        <li><a className="dropdown-a" href="#">Graduate</a></li>
        <li><a className="dropdown-a" href="#">Continuing</a></li>
      </ul>
  </li>
      </ul>
		</nav>
	</header>

    </>
  );
}

export default Header;

