import React from "react";
import "./IntroPage.css";
import logo from "../../assets/logoRemoved.png";
import Typical from "react-typical";
function IntroPage() {
  return (
    <div className="intro_container">
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <div className="intro_info_container">
        <div style={{ marginBottom: 0 }}>
          <Typical steps={["Berdimyrat Nazarov", 1000]} wrapper="h1" />
        </div>
        <div className="title-container">
          <Typical
            steps={["Sophomore Sudent ", 1000, "Front end Developer", 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
