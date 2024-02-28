import "../oneProject/oneProject.scss"

function OnePRoject({ project }) {
    const isPair = project.id % 2 === 0;
    console.log(isPair)
    return (
        <article className={`oneProject ${isPair ? 'right' : 'left'}`}>
            <div className="oneProjectPicture">
                <img src={`pictures/${project.src}`} alt="" />
            </div>
            <div className="oneProjectDescription">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
            </div>
        </article>
    )
}

export default OnePRoject