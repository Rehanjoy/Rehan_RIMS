
import React from "react";
import "./Header.css";

function Header() {
  return (
<>


<header id="header">
		<img src="../public/logoo.png" alt="logo" id="header-img" />
		<h1 className="main-title">Rajendra Institute of Medical Sciences</h1>
    <div className="btns">
    <button className="nav-button mx-2"><span></span>Login</button>
    <button className="nav-button"><span></span>SignUp</button>
  </div>
		<nav id="nav-bar">
			<ul>
				<li className="dropdown">
          <a className="nav-link" href="#">About US</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
        
				<li className="dropdown">
          <a className="nav-link" href="#">Academics</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
				<li className="dropdown">
          <a className="nav-link" href="#">Departments</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
				<li className="dropdown">
          <a className="nav-link" href="#">Specialities</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
        </li>
          <li className="dropdown">
            <a className="nav-link" href="#">Patient</a>
            <ul className="dropdown-content">
              <li><a className="dropdown-a" href="#">Undergraduate</a></li>
              <li><a className="dropdown-a" href="#">Graduate</a></li>
              <li><a className="dropdown-a" href="#">Continuing</a></li>
            </ul>
        </li>
        <li className="dropdown">
          <a className="nav-link" href="#">Facilitiesces</a>
          <ul className="dropdown-content">
            <li><a className="dropdown-a" href="#">Undergraduate</a></li>
            <li><a className="dropdown-a" href="#">Graduate</a></li>
            <li><a className="dropdown-a" href="#">Continuing</a></li>
          </ul>
      </li>
      <li className="dropdown">
        <a className="nav-link" href="#">Info Desk</a>
        <ul className="dropdown-content">
          <li><a className="dropdown-a" href="#">Undergraduate</a></li>
          <li><a className="dropdown-a" href="#">Graduate</a></li>
          <li><a className="dropdown-a" href="#">Continuing</a></li>
        </ul>
    </li>
    <li className="dropdown">
      <a className="nav-link" href="#">Media</a>
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


