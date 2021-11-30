import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

const contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    event.preventDefault();
    console.log(email);
    console.log(message);

    // ------------------APPEL API
    axios.post(`http://localhost:3000/api/contactRequests`).then((res) => {
      alert("Merci, vous serez recontacté d’ici peu");
    });
  };

  return (
    <Layout name="Contact">
      <h1 className="text-2xl text-center">Contact</h1>
      <form className="p-4 m-2">
        <div>
          <label> Votre mail </label>
          <input
            type="text"
            className="border-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pb-4">
          <label> Votre message : </label>
          <input
            type="textarea"
            className="border-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></input>
        </div>

        <button className="border-4 p-2" onClick={handleSubmit}>
          Let's Go
        </button>
      </form>
    </Layout>
  );
};

export default contact;
