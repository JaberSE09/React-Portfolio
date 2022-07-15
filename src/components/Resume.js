import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from "@fortawesome/free-solid-svg-icons"
// import path from "path-browserify"
function Resume() {



    return(
      <a href={require("./resume/resume.pdf")} download className="button btn btn-primary  m-5 d-flex justify-content-center col-4" > <FontAwesomeIcon icon={ faDownload } />&nbsp;Download </a>
    )
  }
export default Resume;
