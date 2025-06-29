import { useEffect, useState } from "react";
import {FaEnvelope } from "react-icons/fa";
import ContactDropdown from "../../components/dropdown";


function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["skills", "about", "projects", "contacts"];
      const scrollPosition = window.scrollY + 150;

      for(const section of sections){
        const el = document.getElementById(section);
        if(el && el.offsetTop <= scrollPosition && el.offsetTop + el.offsetHeight > scrollPosition){
          setActiveSection(section);
          break
        }
      }
    };

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  })

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  }



  

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid d-flex justify-content-between mx-5">
        <a className="navbar-brand logo " href="#">PAUL <span>JR.</span></a>


        {/* responsive button for mobile view */}
        <button className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={isNavOpen}
        aria-label="Toggle navigation"
        data-bs-toggle="collapse">
        
        <span className="navbar-toggler-icon"></span>
        </button>


      <div className={`collapse navbar-collapse collapse-item ${isNavOpen ? "show": ""} `} id="navbarNav">
         <div className="d-flex justify-content-center w-100 nav-items">
                <ul className="navbar-nav gap-4">
                    <li className="nav-item"> <a className={`nav-links ${activeSection === "about" ? "active" : ""}`} href="#about">
                    About
                    </a></li>
                    <li className="nav-item"><a className={`nav-links ${activeSection === "skills" ? "active" : ""}`} href="#skills">Skills</a></li>
                    <li className="nav-item"><a className={`nav-links ${activeSection === "projects" ? "active" : ""}`} href="#projects">Projects</a></li>
                    <li className="nav-item"><a className={`nav-links ${activeSection === "contacts" ? "active" : ""}`} href="#contacts">Contact</a></li>
                </ul>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-2">
            <FaEnvelope className="icon-email fs-1 text-center" />
            <ContactDropdown />
            </div>

      </div>
        </div>
    </nav>
  );
}

export default Header;
