import "../introduction/introduction.scss"
import Title from "../title/Title"

function Introduction() {
    return (
        <section className="introduction">
            <article className="presentation">
                <h1>Bienvenue ! Je suis<br />Marc Ben Bouik</h1>
                <p>Je suis developpeur web spécialisé dans le <span className="purple">Front-End</span> et en <span className="purple">ReactJs</span> <br />Je réalise vos futur projets et améliore vos projets existants !</p>
            </article>
            <div className="profilePicture"></div>
            <Title title={"Mes Services"}/>
        </section>
    )
}
export default Introduction