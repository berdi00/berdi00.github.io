import "./css/main.css";
// import logo from "./assets/logoRemoved.png";
// import { motion } from "framer-motion";
import IntroPage from "./components/Intro/IntroPage";
import "./App.css";
import Skills from "./components/Skills/Skills";
import AboutMe from "./components/About/AboutMe";

function App() {
  return (
    <div className="App">
      <IntroPage />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
