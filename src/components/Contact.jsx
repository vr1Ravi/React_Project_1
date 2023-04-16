import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter Your Name" />
          </div>

          <div>
            <label>Email</label>
            <input type="text" required placeholder="Enter Email" />
          </div>
          <div>
            <label>Message</label>
            <input type="text" required placeholder="Query here (;" />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
