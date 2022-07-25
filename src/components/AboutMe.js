function AboutMe() {

  return (
    <section
      class="section about-section p-5"
      style={{ backgroundColor: "#151f20" }}
      id="about"
    >
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <h3 class=" text-white text-center">
            About Me
            <div class="underline  mb-4"></div>
          </h3>
          <div class="col-lg-6">
            <div class="about-text">
              <h6 class="theme-color text-center text-white lead">
                Full Stack Developer (MERN Developer)
              </h6>
              <p className="text-white text-center">
                  My specialties include quickly learning new skills and
                  programming languages, problem solving, responsive design
                  principles, website optimization, and Model View Controller
                  (MVC) methods of organizing code. So far, I have JavaScript,
                  HTML5, CSS3, C#, SQL, Python, jQuery, Bootstrap,
                  Angular,Git/GitHub, and Node under my belt. I'm still
                  enthusiastically grabbing onto any other programming
                  languages, frameworks, or principles I can integrate into the
                  coding web in my head.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-avatar">
              <img
                className="rounded-circle w-50"
                src={require("../images/sajidjaber.jpeg")}
                title=""
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default AboutMe;
