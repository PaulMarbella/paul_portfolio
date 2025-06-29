import {FaSchool, FaBriefcase } from "react-icons/fa";


function About(){
    return(
        <section className="about" id="about">
            <div> 
                <h1 className="text-center mt-5"><span className="span-title">About</span> Me</h1>
            </div>
            <div className="d-flex justify-content-center mt-5 flex-column align-items-center ">
                <div className="item-1-about d-flex align-items-center justify-content-center gap-5 mb-5" data-aos="fade-right">
                    <i ><FaSchool size={122} /></i>
                    <div className="opacity-100" >
                          <h1><span className="span-title fw-bold">Education </span></h1>
                    <p><strong>October 2021 - October 2025</strong><br/>
                    Polytechnic University of the Philippines <br />
                    Bachelor of Science in Computer Engineering</p>
                    </div>
                </div>
                <div className="item-1-about d-flex align-items-center justify-content-center gap-5" data-aos="fade-right">
                    <i ><FaBriefcase size={122} /></i>
                    <div>
                          <h1><span className="span-title fw-bold">Internship</span></h1>
                    <p><strong>August 2023 - October 2023</strong><br/>
                     Software Developer<br/>
                    VCT Network and Data Solutions
                   </p>
                     <p><strong>August 2024 - October 2024</strong><br/>
                     Mobile Developer<br/>
                    ETR Total Business Solutions Provider
                   </p>
                    </div>
                    
                </div>
            </div>   
        </section>
    )
}

export default About;