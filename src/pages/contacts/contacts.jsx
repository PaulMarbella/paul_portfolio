import { sendForm } from "emailjs-com";
import { useRef } from "react"
    
    
    
    function Contacts(){

        const formRef = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            sendForm(
                'service_zcnhxlg',
                'template_se1ybd7',
                formRef.current,
                'MzzFJLXp1Sc8hPjX7'
            )
            .then((result) => {
                alert('Message Sent, Thank you!');
                formRef.current.reset();
            })
            .catch((error) => {
                console.log(error);
                alert('Did not send');
            })
        };


        return(
            <section className="container contacts" id="contacts">
                <div className="text-center"><h1><span className="span-title">Contact</span> Me</h1></div>
                <div className="d-flex align-items-center justify-content-center gap-5 mt-5 contact-body">
                    <div className="left-contacts col-6">
                        <h3>Feel free to <span className="span-title">Contact</span> me with any inquiries and questions</h3>
                        <h3>I’d like to hear from you!</h3>
                    </div>
                    <div className="contact-form col-6">
                        <form method="POST" className="form" ref={formRef} onSubmit={sendEmail}>
                        <div className="form-group mb-4">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="user_name" required className="form-control" placeholder="Your name...." />
                        </div>
                          <div className="form-group mb-4">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="user_email"  required className="form-control" placeholder="Your Email...." />
                        </div>
                          <div className="form-group mb-5">
                            <label htmlFor="message">Message:</label>
                            <textarea type="text" name="message" id="message" required className="form-control" placeholder="Your Message...." cols={30} rows={5} />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="text-center">Send</button>
                        </div>
                        
                        </form>
                    </div>
                </div>
                
            </section>
        )
    }

    export default Contacts