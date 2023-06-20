import javaScript from "../images/javascript.svg";
import html from "../images/html5-original-wordmark.svg";
import css from "../images/css3-original-wordmark.svg";
import react from "../images/react-original-wordmark.svg";
import express from "../images/express-original-wordmark.svg";
import node from "../images/nodejs-original-wordmark.svg";
import mongo from "../images/mongodb-original-wordmark.svg";
import bootstrap from "../images/bootstrap-plain-wordmark.svg";
import firebase from "../images/firebase-icon.svg";
import git from "../images/git-scm-icon.svg";
const Skills = () => {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="skill-div">
        <div className="skill">
          <span className="logo">
            <img src={html} alt="html" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={css} alt="html" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={javaScript} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={react} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={express} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={node} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={mongo} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={bootstrap} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={firebase} alt="js" />
          </span>
        </div>
        <div className="skill">
          <span className="logo">
            <img src={git} alt="js" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
