
import "./Portfolio.css"
function Portfolio(){

    return (
        <article id="work">
        <div className="portfolio">
            <section className="fullimg">
                <a href="https://jaberse09.github.io/robotco/"> <img className="fullimg" src={require("../images/work1.jpg")}
                        alt="feature website that shows a robot  co company" /></a>
                </section>
        </div>
        <div className="portfolio">
            <section className="working">
                <a href="https://jaberse09.github.io/2-02-challenge/"><img className="workimg"
                        src={require("../images/header.jpg")} alt="portfolio website that features me" />
                </a>
            </section>

            <section className="working">
                <a href="https://jaberse09.github.io/02-Challenge-/" ><img className="workimg" src={require("../images/hero.jpg")}
                    alt="Horizon website shows 3 individuals working around a table" /></a>
            </section>
            <section className="working">
                <a href="https://jaberse09.github.io/Project-1/" ><img className="workimg" src="https://github.com/JaberSE09/Project-1/blob/main/assets/images/fullpage.png?raw=true"
                    alt="bored website to waste time" /></a>
            </section>
            <section className="working">
                <a href="https://github.com/cthomas265/Love-Me" ><img className="workimg" src="https://raw.githubusercontent.com/cthomas265/Love-Me/main/assets/front-page.png"
                    alt="Pets website to waste time" /></a>
            </section>
        </div>
        </article>
    )
}

export default Portfolio;