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
                {project.description.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                    ))}
            </div>
        </article>
    )
}

export default OnePRoject