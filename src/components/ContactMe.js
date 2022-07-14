import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faMailReply, faMapMarked } from '@fortawesome/free-solid-svg-icons'

function ContactMe() {
  return (
    <section class="mb-4">
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact Me
      </h2>
      <p class="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact Me
        directly. I will come back to you within a matter of hours to help you.
      </p>

      <div class="row">
        <div class="contact"></div>
      </div>
      <div class=" text-center">
        <p >
          <FontAwesomeIcon icon={faMapMarked} />&nbsp;
          <a href="https://www.google.com/maps/place/Milwaukee,+WI/@43.0580569,-88.1075128,11z/data=!3m1!4b1!4m5!3m4!1s0x880502d7578b47e7:0x445f1922b5417b84!8m2!3d43.0389025!4d-87.9064736">
           Milwaukee, Wi  </a>| &nbsp;
          <FontAwesomeIcon icon={faPhone} />&nbsp;

 <a href= "tell:4143801606">(414)-380-1606</a> |&nbsp;
          <FontAwesomeIcon icon={faMailReply} />&nbsp; <a href= "mailto:sajidjaber@yahoo.com">sajidjaber@yahoo.com</a>
        </p>
      </div>
    </section>
  );
}

export default ContactMe;
