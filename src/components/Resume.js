import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  FaBootstrap,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaJava,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

import "./Resume.css";

// import path from "path-browserify"
function Resume() {
  return (
    <div>
      <section class="p-5 skill">
        <div class="container-fluid">
          <div class="row text-white text-center">
            <div class="col m-4">
              <h1 class="display-4"> Skills</h1>
              <div class="underline mb-4"></div>
            </div>
          </div>
          <div class="row my-5">
            <div class="col-md-4 text-center">
              <i class="fas fa-cogs fa-5x text-danger mb-4"></i>
              <h1 class="text-white mb-3"> Back End</h1>
              <p class="text-muted">
                <FaNodeJs size={70} /> <FaPhp size={70} />
              </p>
            </div>
            <div class="col-md-4 text-center">
              <i class="fas fa-crop fa-5x text-danger mb-4"></i>
              <h1 class="text-white mb-3"> Front End</h1>
              <p class="text-muted">
                {" "}
                <FaAngular size={70} /> = <FaReact size={70} />{" "}
                <FaBootstrap size={70} />
              </p>
            </div>
            <div class="col-md-4 text-center">
              <i class="fas fa-database fa-5x text-danger mb-4"></i>
              <h1 class="text-white mb-3"> Databases</h1>
              <p class="text-muted">
                <DiMysql size={70} /> <SiMongodb size={70} />{" "}
              </p>
            </div>
          </div>
        </div>
 
      <div className="text-center">
      <a 
        href={require("./resume/resume.pdf")}
        download
        className="button btn btn-primary m-5 p-3 rounded-circle"
      >
        {" "}
        <FontAwesomeIcon icon={faDownload} />
        &nbsp;Resume{" "}
      </a>
      </div>    
       </section>
    </div>
  );
}
export default Resume;
