import { useState } from "react";
import ModalProject from "../../components/modalProjects";


function Projects(){


    const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

const projectData = [
    {
      title: 'SAGIP (Thesis Project)',
      description: 'SAGIP is a prototype that focuses on addressing the gaps in real-time environmental monitoring in Paranaque City ',
      information:"The SAGIP Monitoring System provides a visually interactive and user-friendly experience which is powered by Raspberry Pi and Esp32 for sensor readings, optimized for accessibility and usability across various devices and user roles. Designed with emergency response chat system and ArcGIS API for mapping, the system combines modern frontend frameworks with advanced mapping capabilities. It uses php as backend that combines with phpMyAdmin as our database that stores all the weather data within our readings of our sensors. It is primary connected to the apache server and database of the Raspberry Pi." ,
      link: 'sagip.online',
      image: '/src/assets/Sagip-project.gif',
      image2: '/src/assets/Sagip-project2.jpg',
      image3: '/src/assets/Sagip-project3.jpg'
    },
    {
      title: 'Task Tracker',
      description: 'Task Tracker is a todo list application which it provides the status of your work/task wether is in progess, queue or done.',
      image: '/src/assets/task-tracker.png',
    },
    {
      title: 'Comming Soon',
      description: '-',
      image: '/src/assets/no-display.png',
    },
    {
      title: 'Comming Soon',
      description: '-',
      image: '/src/assets/no-display.png',
    },
    {
      title: 'Comming Soon',
      description: '-',
      image: '/src/assets/no-display.png',
    },
    {
      title: 'Comming Soon',
      description: '-',
      image: '/src/assets/no-display.png',
    },
     {
      title: 'Comming Soon',
      description: '-',
      image: '/src/assets/no-display.png',
    },
     {
      title: 'Comming Soon',
      description: '-',
      image: '/src/assets/no-display.png',
    },
  ];

  const groupedProjects = chunkArray(projectData, 4);

  
  const [selectedProject, setSelectedProject] = useState(null);


    return(
        <section className=" container projects" id="projects">
            <div>
                <h1 className="text-center">My <span className="span-title">Projects</span></h1>
            </div>

            <div className="carousel-container mt-5 d-flex align-items-center justify-content-center" data-aos="fade-up">
                <button className="btn btn-outline-secondary me-3" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              ‹
                </button>
               <div id="projectCarousel" className="carousel slide flex-grow-1" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-inner">
                    {groupedProjects.map((group, groupIndex) => (
                    <div
                        className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}
                        key={groupIndex}
                    >
                        <div className="row">
                        {group.map((project, index) => (
                            <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                            <div className="card" data-bs-toggle="modal" data-bs-target="#project-info" onClick={() => setSelectedProject(project)}>
                                <img
                                src={project.image}
                                className="card-img-top"
                                alt={project.title}
                                />
                                <hr/>
                                <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                                </div>
                            </div>
                            </div>
                            
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>

                        
               </div>
               <button className="btn btn-outline-secondary ms-3" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              ›
            </button>
            </div>

      <ModalProject projects={selectedProject}  />
           
        </section>
    )
}

export default Projects