import "./Sobre.css";

export const Sobre = ({categoria}) => {
    return(
        <div id={categoria}>
            <div id="resumo">
                <h2>Sobre min</h2>

                <p>
                Sou Nicolle Monteiro, desenvolvedora web apaixonada por tecnologia e criação digital. <br />
                Trabalho com HTML, CSS, JavaScript e React, transformando ideias em sites modernos, funcionais e bem estruturados. 
                Estou sempre em busca de novos aprendizados para evoluir como profissional e criar experiências cada vez melhores na web.
                </p>

            </div>

            <div id="meus-conhecimentos">
                <h2>Meus conhecimentos</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul>
            </div>

        </div>
    )
}