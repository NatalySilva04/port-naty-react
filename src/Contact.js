import React from "react";

function Contact() {
    return (
        <section id="contato">
        <h2>Contato</h2>
        <p>
          Você pode entrar em contato comigo por: <br />
          E-mail: nataly.silva04@gmail.com <br />
          Telefone: +55 81 99676-7223
        </p>
        <h3>Vamos nos conectar!</h3>
        <div class="contato">
            <a href="https://www.linkedin.com/in/nataly-rodrigues-691717216/" target="_blank" rel="noopener noreferrer">
            <p>Linkedin - Nataly Rodrigues</p></a>            
        </div>
        <div class="contato">
            <a href="https://github.com/NatalySilva04" target="_blank" rel="noopener noreferrer">
            <p>Github - Nataly Rodrigues</p></a>            
        </div>
        
        </section>
    );
}

export default Contact;

