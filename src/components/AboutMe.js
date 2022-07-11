function AboutMe() {

  return (
    <section className= "section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text go-to">
              <h3 className="dark-color">About Me</h3>
              <h6 className="theme-color lead">
                A Lead Full Stack &amp; Web Developer
              </h6>
              <p>
                My specialties include quickly learning new skills and
                programming languages, problem solving, responsive design
                principles, website optimization, and Model View Controller
                (MVC) methods of organizing code. So far, I have JavaScript,
                HTML5, CSS3, C#, SQL, Python, jQuery, Bootstrap,
                Angular,Git/GitHub, and Node under my belt. I'm still
                enthusiastically grabbing onto any other programming languages,
                frameworks, or principles I can integrate into the coding web in
                my head.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-avatar">
              <img className="rounded-circle w-50" src={ require('../images/sajidjaber.jpeg')} /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
