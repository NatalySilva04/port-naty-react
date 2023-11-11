import React from "react";
import foto2 from './minha_foto2.png';



function Sobre () {
    return (
        <section>
            <div id="sobre">
            <h2>Sobre Mim</h2>
            <p>Perfil profissional</p>
            <div id="retrato">
                <img src={foto2} alt="Minha foto2"/>
            </div>
            </div>
            <div id="maisSobre">
                <div class="boxUm">
                    <p>Sou Nataly Rodrigues</p>
                    <p> Graduanda do curso de Análise e Desenvolvimento de Sistemas. Em busca de uma oportunidade como desenvolvedora web com as através de códigos, como HTML, CSS e JavaScript.</p>
                </div>
                <div class="boxDois">
                    <p>&rArr; Brasileira</p>
                    <p>&rArr; Pernambucana</p>
                    <p>&rArr; Idioma: Português e Inglês</p>
                    <p>&rArr; Email: nataly.silva04@gmail.com</p>
                    <p>&rArr; Telefon: (81) 99676-7223</p>
                </div>
            </div>
        </section>
    );
}

export default Sobre; 