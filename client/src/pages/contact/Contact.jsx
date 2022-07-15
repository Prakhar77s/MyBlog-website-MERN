import React from "react";
import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const { done, setDone } = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m2anovh",
        "template_wqad59l",
        formRef.current,
        "user_OZNstPzANkZiv3FV6XfsT"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("thanks");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img
                src="https://media.istockphoto.com/vectors/call-icon-vector-noisy-phone-flat-calling-symbol-isolated-on-white-vector-id1173137785?k=20&m=1173137785&s=170667a&w=0&h=YhlRkjeZOipQQG_kswC4-xtSNgYeSEoIkGexhuEcXkk="
                alt=""
                className="c-icon"
              />
              +91123456789
            </div>
            <div className="c-info-item">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="c-icon"
              />
              prakhars76@gmail.com
            </div>
            <div className="c-info-item">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="c-icon"
              />
              maharashtra, mumbai
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Whats your story?</b> Get in touch, Always available for your
            support send your queries here.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              className="inp"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className="inp"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="inp"
              type="text"
              placeholder="E-mail"
              name="user_email"
            />
            <textarea
              className="texta"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thankyou..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
