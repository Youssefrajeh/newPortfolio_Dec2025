import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <form
                    id="contact-form"
                    className="contact-form"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        fetch('/', {
                            method: 'POST',
                            headers: { "Content-Type": "application/x-www-form-urlencoded" },
                            body: new URLSearchParams(formData).toString()
                        })
                            .then(() => alert("Thank you! Your message has been sent."))
                            .catch((error) => alert(error));
                    }}
                >
                    {/* Hidden honeypot field for spam protection */}
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />

                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Your Name"
                            autoComplete="name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Your Email"
                            autoComplete="email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            placeholder="Subject"
                            autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            name="message"
                            required
                            placeholder="Your Message"
                            autoComplete="off"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                <div className="contact-info">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <p>
                            <a href="mailto:youssefrrajeh@gmail.com">youssefrrajeh@gmail.com</a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <p><a href="tel:+15483884360">+1 (548) 388-4360</a></p>
                    </div>
                    <div className="contact-item">
                        <i className="fab fa-whatsapp"></i>
                        <p>
                            <a href="https://wa.me/15483884360" target="_blank" rel="noopener noreferrer">WhatsApp Message</a>
                        </p>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>
                            <a href="https://www.google.com/maps/place/London,+ON,+Canada" target="_blank" rel="noopener noreferrer">London, Ontario, Canada</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
