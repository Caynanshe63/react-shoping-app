const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <p className="contact-text">
        Have questions or feedback about our shopping cart project?  
        Send us a message below.
      </p>

      <form className="contact-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea placeholder="Write your message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
