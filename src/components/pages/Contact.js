import React, { useState } from 'react';

function Contact() {

    const [errorMessage, setErrorMessage] = useState
    const [formState] = useState ({
        name: '',
        email: ''
    });
       

    const handleSubmit = (e) => {
        e.preventdefault();
        if (errorMessage) {
            setErrorMessage('Something went wrong', formState)
        } else {
            console.log('Submit form', formState)
        }
    };
    
    return (
        <section>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email address:</label>
                    <input type='email' name='email' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;