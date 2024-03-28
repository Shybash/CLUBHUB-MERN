import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file for styling

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false); // Define loading state

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when form is submitted
        // Add your code to handle form submission, such as sending data to backend or displaying a confirmation message
        console.log(formData);
        setLoading(false); // Set loading state back to false when form submission is complete
    };

    return (
        <div className="contact-us-container">
            <h1>Contact Us</h1>
            <p>For any inquiries or support, please fill out the form below or contact us at <a href="mailto:support@clubhub.com">support@clubhub.com</a>.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="d-flex align-items-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <span className="ml-2">Loading...</span>
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
            </form>
        </div>
    );
};

export default ContactUs;
