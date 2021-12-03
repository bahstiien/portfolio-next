import { useState, useEffect, useRef } from "react";
import axios from "axios";
import emailjs from "emailjs-com";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

const contact = () => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // // ------------------APPEL API
  // axios.post(`http://localhost:3000/api/contactRequests`).then((res) => {
  //
  // });

  function sendmail(e) {
    e.preventDefault();
    alert("Merci, vous serez recontacté d’ici peu");

    emailjs
      .sendForm(
        "service_scb7kbd",
        "template_b64sh08",
        form.current,
        "user_HJJ9D5D81a0748P6oWLwv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail(""), setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <Layout name="Contact">
      <h1 className="text-2xl text-center">Contact</h1>
      <form className="p-4 m-2" ref={form} onSubmit={sendmail}>
        <div>
          <label htmlFor="email"> Votre mail </label>
          <input
            type="text"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
        <div className="pb-4">
          <label htmlFor="message"> Votre message : </label>
          <input
            type="textarea"
            className="border-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          ></input>
        </div>

        <input className="border-4 p-2" value="SEND" type="submit" />
      </form>
    </Layout>
  );
};

export default contact;
