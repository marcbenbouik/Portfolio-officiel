import "../form/form.scss";

function Form() {

    return (
        <div className="formDiv">
            <form name="contact" method="post" data-netlify="true" onSubmit="submit">

                <input type="hidden" name="form-name" value="contact" />

                <label>Nom:</label>
                <input type="text" name="name" className="input"/>

                <label>Email:</label>
                <input type="email" name="email" className="input" />

                <label>Message:</label>
                <textarea name="message" className="message"/>

                <button type="submit" className="envoyer">Envoyer</button>
            </form>
        </div>
    );
}

export default Form;
// /?form-name=contact&name=&email=&message=:1 
        
        
    //    GET https://main--2bweb.netlify.app/?form-name=contact&name=&email=&message= 500 (Internal Server Error)