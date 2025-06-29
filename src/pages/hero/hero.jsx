
function Hero(){
    return(
            <section className="container-fluid d-flex justify-content-evenly align-items-center hero gap-3" id="hero" > 
                <div className="left-hero">
                    <div data-aos="fade-up">
                    <h1>Hi There! I'm <span className="name">Paul Marbella Jr</span></h1>
                    <h3>Software Engineer</h3>
                    <p>"Blending curiosity and code to bring bold ideas to life. Let's make something meaningful."</p>
                    <div className="d-flex gap-3">
                        <a id="resume" href="#contacts">View Resume</a>
                        <a id="contact-me" href="#contacts">Contact Me</a>
                    </div>
                    </div>
                </div>
                <div className="pic-container">
                    <div data-aos="fade-left">
                        <img src={`${import.meta.env.BASE_URL}assets/portfolio-pic.png`} className=" hero-pic border border-4 border-dark rounded shadow " />
                    </div>
                </div>
                
            </section>
    )
}

export default Hero