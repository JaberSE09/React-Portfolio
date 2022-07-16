import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMailReply,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons";

function ContactMe() {
  return (
    <div classNameName="contact">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact Me
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact me
        directly. I will come back to you within a matter of hours to help you.
      </p>

      <div className="row justify-content-center" >
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            className="m-5 text-center"
          >
            <div className="">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
                <label for="name" className="">
                  Your name
                </label>
              </div>

              <div className="">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label for="email" className="">
                    Your email
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div className="md-form mb-0">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                />
                <label for="subject" className="">
                  Subject
                </label>
              </div>
            </div>

            <div className="">
              <div className="md-form">
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                ></textarea>
                <label for="message">Your message</label>
              </div>
            </div>
          </form>

          <div className="text-center">
            <a href="/" className="btn btn-primary">Send</a>
          </div>

        <div className=" text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <FontAwesomeIcon icon={faMapMarked} />
              <p>Milwaukee Wi</p>
            </li>

            <li>
              <FontAwesomeIcon icon={faPhone} />
              <p>+ 01 234 567 89</p>
            </li>

            <li>
              <FontAwesomeIcon icon={faMailReply} />
              <p>sajidjaber@yahoo.com</p>
            </li>
          </ul>
        </div>
      </div>
   
    </div> 
  </div>
  );
}

export default ContactMe;
