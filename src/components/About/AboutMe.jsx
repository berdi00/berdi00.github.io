import React from "react";
import male from "../../assets/student.png";
import text from "../../text.js";
import "./AboutMe.css";
import { motion } from "framer-motion";
function AboutMe() {
  return (
    <div className="about">
      <h1 className="section-title">ABOUT ME</h1>
      <div className="about_container">
        <motion.span
          initial={{ x: -1200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="avatar"
        >
          <img src={male} alt="Avatar" />
        </motion.span>
        <motion.div
          initial={{ x: 1200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="about_info"
        >
          <p>{text}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
