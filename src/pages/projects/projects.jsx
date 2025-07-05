import { useState } from "react";
import ModalProject from "../../components/modalProjects";

function Projects() {
  const projectData = [
    {
      title: "SAGIP (Thesis Project)",
      description:
        "SAGIP is a prototype that focuses on addressing the gaps in real-time environmental monitoring in Paranaque City ",
      information:
          `The <strong>SAGIP</strong> Monitoring System provides a visually interactive and user-friendly experience which is powered by Raspberry Pi and Esp32 for sensor readings, optimized for accessibility and usability across various devices and user roles. Designed with emergency response chat system and ArcGIS API for mapping, the system combines modern frontend frameworks with advanced mapping capabilities. It uses php as backend that combines with phpMyAdmin as our database that stores all the weather data within our readings of our sensors. It is primary connected to the apache server and database of the Raspberry Pi.`,
      link: "sagip.online",
      image: `${import.meta.env.BASE_URL}assets/sagip-project2.gif`,
      image2: `${import.meta.env.BASE_URL}assets/sagip-project2.jpg`,
      image3: `${import.meta.env.BASE_URL}assets/sagip-project3.jpg`,
      image4: `${import.meta.env.BASE_URL}assets/sagip-project4.jpg`,
      desktop: [
        `${import.meta.env.BASE_URL}assets/sagip-desktop1.png`,
        `${import.meta.env.BASE_URL}assets/sagip-desktop2.png`,
        `${import.meta.env.BASE_URL}assets/sagip-desktop3.png`,
        `${import.meta.env.BASE_URL}assets/sagip-desktop4.png`,
      ],
    },
    {
      title: "Task Tracker",
      description:
        "Task Tracker is a todo list application which it provides the status of your work/task wether is in progess, queue or done.",
      image: `${import.meta.env.BASE_URL}assets/task-tracker.png`,
    },
    {
      title: "Comming Soon",
      description: "-",
      image: `${import.meta.env.BASE_URL}assets/no-display.png`,
    },
    {
      title: "Comming Soon",
      description: "-",
      image: `${import.meta.env.BASE_URL}assets/no-display.png`,
    },
    {
      title: "Comming Soon",
      description: "-",
      image: `${import.meta.env.BASE_URL}assets/no-display.png`,
    },
    {
      title: "Comming Soon",
      description: "-",
      image: `${import.meta.env.BASE_URL}assets/no-display.png`,
    },
    {
      title: "Comming Soon",
      description: "-",
      image: `${import.meta.env.BASE_URL}assets/no-display.png`,
    },
    {
      title: "Comming Soon",
      description: "-",
      image: `${import.meta.env.BASE_URL}assets/no-display.png`,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="container projects" id="projects">
      <div>
        <h1 className="text-center">
          My <span className="span-title">Projects</span>
        </h1>
      </div>

      <div className="row mt-5" data-aos="fade-up">
        {projectData.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <div
              className="card h-100"
              data-bs-toggle="modal"
              data-bs-target="#project-info"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <hr />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ModalProject projects={selectedProject} />
    </section>
  );
}

export default Projects;
