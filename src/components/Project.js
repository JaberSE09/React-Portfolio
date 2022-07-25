function Project() {
  const Projects = [
    {
      id: 1,
      name: "Bored? What to do?",
      image: require("../images/project1.png"),
      deployed: "https://jaberse09.github.io/Project-1/",
      github: "https://github.com/JaberSE09/Project-1",
    },
    {
      id: 2,
      name: "Love Me",
      image: require("../images/project2.png"),
      deployed: "https://damp-hamlet-43644.herokuapp.com/",
      github: "https://github.com/cthomas265/Love-Me",
    },
    {
      id: 3,
      name: "Tech Blog",
      image: require("../images/techblog.png"),
      deployed: "https://obscure-island-63247.herokuapp.com/",
      github:
        "https://github.com/JaberSE09/Model-View-Controller--MVC--Challenge--Tech-Blog",
    },
    {
      id: 4,
      name: "Note Taker",
      image: require("../images/notetaker.png"),
      deployed: "https://github.com/JaberSE09/Express.js-Challenge-Note-Taker",
      github:
        "https://github.com/JaberSE09/Model-View-Controller--MVC--Challenge--Tech-Blog",
    },
    {
      id: 5,
      name: "Password Generator",
      image: require("../images/passwordgenerator.png"),
      deployed: "https://jaberse09.github.io/3-02-challenge/",
      github: "https://github.com/JaberSE09/3-02-challenge",
    },
    {
      id: 6,
      name: "React Portfolio",
      image: require("../images/react-portfolio.png"),
      deployed: "https://jaberse09.github.io/React-Portfolio/",
      github: "https://github.com/JaberSE09/React-Portfolio",
    },
  ];

  return Projects.map((project, id) => {
    return (
      <div className="card col-3 m-3" key={project.id}>
        <div className="card-header m-3">{project.name}</div>
        <img className="card-img-top" src={project.image} alt="bored" />
        <div className="card-body">
          <p className="card-text list-group">
            <a
              className="btn list-group--item"
              href={project.deployed}
              target="_blank"
              rel="noreferrer"
            >
              Deployed Website
            </a>
            <a
              className="btn list-group--item"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Github Website
            </a>
          </p>
        </div>
      </div>
    );
  });
}

export default Project;
