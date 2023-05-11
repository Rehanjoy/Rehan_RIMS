
import React from 'react'
import'./Footer.css'

function Footer() {
  return (
    <>
    <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h2>Site Navigation</h2>
          <ul className="list-unstyled">
            <li><a href="#"></a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">RTI</a></li>
            <li><a href="#">Patients</a></li>
            <li><a href="#">Tenders</a></li>
            <li><a href="#">Recruitments</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h2>Quick Links</h2>
          <ul className="list-unstyled">
            <li><a href="#">Government of Jharkhand</a></li>
            <li><a href="#">National Medical Commission</a></li>
            <li><a href="#">Ministry of Health and Family Welfare</a></li>
            <li><a href="#">Junior Doctors Association</a></li>
            <li><a href="#">Antiragging</a></li>
            <li><a href="#">Online Registration System</a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-6">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h2>Contact</h2>
          <ul className="list-unstyled">
            <li><a href="#">RIMS, Bariatu
Ranchi, Jharkhand, India</a></li>
            <li><a href="#">Ph : 0651-2776000</a></li>
            <li><a href="#">Fax: +91-651-2540629</a></li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
  <div className="col-md-3">
  <h2>Follow Us</h2>
            <ul className="social-network social-circle">
             <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
             <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
            </ul>				
		</div>
    </div>
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2023 - <span style={{color:"olive"}} >Md Rehan</span>   All rights reserved.</p>
		</div>
	</div>


  </div>
  </div>
</footer>

    
    </>
    
  )
}

export default Footer;