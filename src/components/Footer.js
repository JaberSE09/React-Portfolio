import "./Footer.css"
import {DiGithubAlt} from "react-icons/di"
import {AiFillLinkedin} from "react-icons/ai"

function Footer() {
  return (
    <footer className="footer bg-dark text-white">
        <div className="text-center p-3">© 2022 Copyright Sajid Jaber
        <div className="btn"><a href="https://github.com/JaberSE09"><DiGithubAlt /></a></div>
        <div className="btn"><a href="https://www.linkedin.com/in/sajidjaber/"><AiFillLinkedin /></a></div>
        </div>
        </footer>
  );
}

export default Footer;
