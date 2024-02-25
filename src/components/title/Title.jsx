import "../title/title.scss"

function Title({ title, id }) {
    return (
        <div className="title" id={id}>
            <h2>{title}</h2>
        </div>
    )
}

export default Title