function ModalProject({ projects }) {
  if (!projects) return null;

  return (
    <div
      className="modal fade"
      id="project-info"
      tabIndex="-1"
      aria-labelledby="project-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="modalLabel">
              <span className="span-title">{projects.title}</span>
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 text-center mb-3">
                <img
                  src={projects.image}
                  className="card-img-left"
                  alt={projects.title}
                />
              </div>

              <div className="col-md-6">
                {projects.desktop && (
                  <img
                    src={projects.desktop[3]}
                    className="card-img-desktop mb-3"
                    alt={projects.title}
                  />
                )}

                {(projects.image2 || projects.image3 || projects.image4) && (
                  <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                    {projects.image2 && (
                      <img
                        src={projects.image2}
                        className="pic-projects"
                        alt={projects.title}
                      />
                    )}
                    {projects.image3 && (
                      <img
                        src={projects.image3}
                        className="pic-projects"
                        alt={projects.title}
                      />
                    )}
                    {projects.image4 && (
                      <img
                        src={projects.image4}
                        className="pic-projects"
                        alt={projects.title}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4">
              <p>{projects.description}</p>
              {projects.information && (
                <p dangerouslySetInnerHTML={{ __html: projects.information }} />
              )}
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProject;
