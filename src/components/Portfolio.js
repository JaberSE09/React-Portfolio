
import "./Portfolio.css"
function Portfolio(){

    return (
<div className="portfolio">
        <div className="card col-3 m-3" >
          <div className="card-header m-3">Bored? What to do</div>
        <img className="card-img-top" src={require("../images/project1.png")} alt="bored" />
        <div className="card-body">
          <p className="card-text list-group">
          <a className="btn list-group--item" href="https://jaberse09.github.io/Project-1/">Deployed Website</a>
          <a className="btn list-group--item" href="https://github.com/JaberSE09/Project-1">Github Website</a>
          </p>
        </div>
      </div>
         <div className="card col-3 m-3" >
         <div className="card-header m-3">Love Me</div>
       <img className="card-img-top" src={require("../images/project2.png")} alt="Love Me " />
       <div className="card-body">
         <p className="card-text list-group">
         <a className="btn list-group--item" href="https://damp-hamlet-43644.herokuapp.com/">Deployed Website</a>
         <a className="btn list-group--item" href="https://github.com/cthomas265/Love-Me">Github Website</a>
         </p>
       </div>
     </div>

     <div className="card col-3 m-3" >
         <div className="card-header m-3">Tech Blog</div>
       <img className="card-img-top" src={require("../images/techblog.png")} alt="tech blog " />
       <div className="card-body">
         <p className="card-text list-group">
         <a className="btn list-group--item" href="https://obscure-island-63247.herokuapp.com/">Deployed Website</a>
         <a className="btn list-group--item" href="https://github.com/JaberSE09/Model-View-Controller--MVC--Challenge--Tech-Blog">Github Website</a>
         </p>
       </div>
     </div>

     <div className="card col-3 m-3" >
         <div className="card-header m-3">Note Taker</div>
       <img className="card-img-top" src={require("../images/notetaker.png")} alt="note taker" />
       <div className="card-body">
         <p className="card-text list-group">
         <a className="btn list-group--item" href="https://github.com/JaberSE09/Express.js-Challenge-Note-Taker">Deployed Website</a>
         <a className="btn list-group--item" href="https://github.com/JaberSE09/Model-View-Controller--MVC--Challenge--Tech-Blog">Github Website</a>
         </p>
       </div>
     </div>

     <div className="card col-3 m-3" >
         <div className="card-header m-3">Password Generator</div>
       <img className="card-img-top" src={require("../images/passwordgenerator.png")} alt="password generator " />
       <div className="card-body">
         <p className="card-text list-group">
         <a className="btn list-group--item" href="https://jaberse09.github.io/3-02-challenge/">Deployed Website</a>
         <a className="btn list-group--item" href="https://github.com/JaberSE09/3-02-challenge">Github Website</a>
         </p>
       </div>
     </div>

     <div className="card col-3 m-3" >
         <div className="card-header m-3">React Portfolio</div>
       <img className="card-img-top" src={require("../images/react-portfoliko.png")} alt="portfolio " />
       <div className="card-body">
         <p className="card-text list-group">
         <a className="btn list-group--item" href="https://jaberse09.github.io/React-Portfolio/">Deployed Website</a>
         <a className="btn list-group--item" href="https://github.com/JaberSE09/React-Portfolio">Github Website</a>
         </p>
       </div>
     </div>

     </div>
    )
}

export default Portfolio;