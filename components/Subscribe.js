import axios from "axios";
import { useState } from "react";
import styles from '../styles/Subscribe.module.css';

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/subscribe", { email });

      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while subscribing, please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group py-4">
        <label htmlFor="email" className="form-label form-label-sm">
          Reach Out To Us
        </label>
        <input
          type="email"
          className="form-control input-white"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="light-line"></div>
      </div>
      <button type="submit" id="subscribeBtn" className="btn btn-primary">
        Subscribe
      </button>
      {message && <p className="pt-3">{message}</p>}
    </form>
  );
};

export default Subscribe;

