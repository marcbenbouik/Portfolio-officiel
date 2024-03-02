import "../introduction/introduction.scss"
import Title from "../title/Title"
import profil from "../../pictures/profile.jpg"

function Introduction() {
    return (
        <section className="introduction" id="introduction">
            <article className="presentation">
                <h1><span className="purple">Créativité, Expertise, Réactivité!</span><br />Réalisez votre projet Web</h1>
                <p>Transformez <span className="purple">vos idées en réalité  </span> digitale avec expertise et créativité <br />Votre développeur React dédié est prêt à <span className="purple">concrétiser vos projets</span> web!</p>
            </article>
            <div className="profilePicture">
                <img src={profil} alt="" className="profile" />
            </div>
            <Title title={"Mes Services"} id={"servicesTitle"} />
        </section>
    )
}
export default Introduction