import "../form/form.scss";

function Form() {

    return (
        <div className="contact">
            <form name="contact" method="post" data-netlify="true" onSubmit="submit">

                <input type="hidden" name="form-name" value="contact" />

                <label>Nom:</label>
                <input type="text" name="name" />

                <label>Email:</label>
                <input type="email" name="email" />

                <label>Message:</label>
                <textarea name="message" />

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Form;
