import { useEffect, useState } from "react";
import "./style.css";
import axios from 'axios'

export const MyForm = () => {
    const [formData, setFormData] = useState({});






    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/forms', formData);
            alert(`I dati sono stati inviati con successo! Ecco un riepilogo dei dati inseriti:\n\nNome: ${formData.name}
            \nAzienda: ${formData.company} 
            \nInfo: ${formData.concerns}
            \nEmail: ${formData.email} 
            \nWhatsApp: ${formData.whatsapp}`);
        } catch (error) {
            console.error(error);
            alert('Si è verificato un errore durante l\'invio dei dati.');
        }
    };



    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <section>
            <h2>CONTATTACI</h2>
            <h3>Smetti di sognarlo<br />e facciamolo</h3>
            <form onSubmit={handleSubmit}>
                <label for="name">Mi chiamo</label>
                <input id="name" placeholder="nome e cognome" type="text" name="name" required onChange={handleChange}></input>

                <label for="company">e lavoro in</label>
                <input id="company" placeholder="nome azienda" type="text" name="company" required onChange={handleChange}></input>

                <label for="concerns">Vorrei informazioni riguardo:</label>
                <input id="concerns" placeholder="info:" type="text" name="concerns" required onChange={handleChange}></input>


                <label for="email">Vorrei essere ricontattato via e-mail:</label>
                <input id="email" placeholder="nome@email.com" type="text" name="email" required onChange={handleChange}></input>

                <label for="whatsapp">Oppure su WhatsaApp:</label>
                <input id="whatsapp" placeholder="+39 0123456789" type="text" name="whatsapp" required onChange={handleChange}></input>

                <div className="checkboxes">
                    <div className="firstCheck">
                        <label for="consent">Acconsento all'uso dei miei dati per ricevere una risposta da DonQ.* </label>
                        <input id="consentAnswer" type="checkbox" name="consentAnswer" required onChange={handleChange}></input>
                    </div>

                    <div className="secondCheck">
                        <label for="consent">Acconsento all'iscrizione alla Newsletter di DonQ per ricevere news tech e aggiornamenti.</label>
                        <input id="consentNewsletter" type="checkbox" name="consentNewsletter"></input>
                    </div>

                </div>
                <div className="submitForm">
                    <button id="submitButton" type="submit">invia</button>
                    <h4>o se preferisci</h4>
                    <a href="mailto:donq@donq.io"><p>scrivici una mail</p></a>

                </div>





            </form>
        </section>
    )
}