import React from "react";
import "./SkillsList.css";
function SkillsList(props) {
  return (
    <li className="list-inline" key={props.key}>
      <div className="inline_container">
        <i className={props.icon} style={{ fontSize: "300%" }}></i>
        <p style={{ fontSize: "70%", marginTop: "8px", color: "white" }}>
          {props.name}
        </p>
      </div>
    </li>
  );
}

export default SkillsList;
