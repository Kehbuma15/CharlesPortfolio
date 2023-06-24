import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import {RiMessengerLine} from 'react-icons/ri' ;            
import {BsWhatsapp} from 'react-icons/bs'             


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rdw8kto', 'template_hppidai', form.current, 'Sbrsmye6r7vUlZpK3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>kehbuma185@gmail.com</h5>
            <a href="mailto:kehbuma185@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Charlie Charles</h5>
            <a href="https://web.facebook.com/profile.php?id=100076526053229" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>237654546322</h5>
            <a href="https://api.whatsapp.com/send?phone=+237654546322" target="_blank">Send a message</a>
          </article>
        </div>

        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
      <input type="email" name="email" placeholder='Your Email' required/>
       <textarea  name="message"  rows="7" placeholder="Your message" id ="" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
       
      </div>
    </section>
  );
};

export default Contact;
