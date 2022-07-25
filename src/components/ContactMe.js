import { AiFillMail, AiFillMessage } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";


function ContactMe() {
  return (
    <div style={{ backgroundColor: "#151f20" }}>
      <h2 class="text-center">Contact Form</h2>
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6 pb-5">
          <form method="post">
            <div class="card border-primary rounded-0">
              <div class="card-header p-0">
                <div class="bg-info text-white text-center py-2">
                  <h3>Contact Me</h3>
                  <p class="m-0">Send A Message</p>
                </div>
              </div>
              <div class="card-body p-3">
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <IoMdPerson />
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="nombre"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <AiFillMail />
                      </div>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <AiFillMessage />
                      </div>
                    </div>
                    <textarea
                      id="message"
                      class="form-control"
                      placeholder="this is a message..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div class="text-center">
                  <input
                    type="submit"
                    value="Submit"
                    class="btn btn-info btn-block rounded-0 py-2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    /* 
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
              <p>(414)-380-1606</p>
            </li>

            <li>
              <FontAwesomeIcon icon={faMailReply} />
              <p>sajidjaber@yahoo.com</p>
            </li>
          </ul>
        </div>
      </div>
   
    </div> 
  </div> */
  );
}

export default ContactMe;
