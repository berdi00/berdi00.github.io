import React from "react";
import "./Skills.css";
import SkillsList from "./SkillsList";
import { motion } from "framer-motion";
function Skills() {
  const ar = [
    {
      name: "Javascript",
      icon: "devicon-javascript-plain colored",
    },
    {
      name: "Reactjs",
      icon: "devicon-react-original colored",
    },
    {
      name: "Redux",
      icon: "devicon-redux-original colored",
    },
    {
      name: "Css",
      icon: "devicon-css3-plain colored",
    },
    {
      name: "Html",
      icon: "devicon-html5-plain colored",
    },
    {
      name: "Typescript",
      icon: "devicon-typescript-plain colored",
    },
  ];
  return (
    <motion.div
      className="skills_section"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="_container">
        <div className="section-title">
          <span className="text-white">SKILLS</span>
        </div>
      </div>
      <div className="icon-container">
        <ul className="list_icons_names">
          {ar.map((el, index) => (
            <SkillsList name={el.name} key={index} icon={el.icon} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Skills;
