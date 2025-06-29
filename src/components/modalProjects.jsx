
function ModalProject({ projects }){
    if (!projects) return null;
    return(
        <div className="modal fade" id="project-info" tabindex="-1" aria-labelledby="project-modal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title" id="modalLabel"><span className="span-title">{projects.title}</span></h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                         <img
                                src={projects.image}
                                className="card-img-top"
                                alt={projects.title}
                                />
                        <div className="d-flex gap-5 my-4 pic-projects">
                                 <img
                                src={projects.image2}
                                className="card-img-top"
                                alt={projects.title}
                                />
                                 <img
                                src={projects.image3}
                                className="card-img-top"
                                alt={projects.title}
                                />
                        </div>
                        <p className="mt-3">{projects.description}</p>
                        <p>{projects.information}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalProject;