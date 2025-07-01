import {FaLaptop,FaDatabase,FaGlobe } from "react-icons/fa";

function Skills(){
    return(
        <section className="container skills" id="skills">
            <div>
                <h1 className="text-center">My <span className="span-title fw-bold">Skills</span></h1>
            </div>
            <div className="mt-5" data-aos="fade-right">
                <div className="item-skills">
                    <div className="d-flex gap-3">
                         <i><FaLaptop size={70} /></i>
                         <h1><span className="span-title">Programming Language</span></h1>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                        <div className="tags">Javascript</div>
                        <div className="tags">PHP</div>
                        <div className="tags">C++</div>
                        <div className="tags">C#</div>
                    </div>
                </div>

                <div className="item-skills">
                    <div className="d-flex gap-3">
                         <i><FaDatabase size={70} /></i>
                         <h1><span className="span-title">Database</span></h1>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                        <div className="tags">SQl</div>
                        <div className="tags">PHPmyAdmin</div>
                        <div className="tags">MongoDB</div>
                    </div>
                </div>

                <div className="item-skills">
                    <div className="d-flex gap-3">
                         <i><FaGlobe size={70} /></i>
                         <h1><span className="span-title">Frameworks & Libraries</span></h1>
                    </div>
                    <div className="d-flex gap-3 mt-3">
                        <div className="tags">React.js</div>
                        <div className="tags">React Native</div>
                        <div className="tags">Asp.net MVC</div>
                        <div className="tags">Bootstrap</div>
                        <div className="tags">MERN</div>
                        <div className="tags">Arduino</div>
                        <div className="tags">Chart.js</div>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default Skills;