import imagemDev from "../src/imagens/pessoa.png";
import iconeGithub from "../src/imagens/github.png";
import iconeLinkedin from "../src/imagens/linkdin.png";

function App() {
 
  return (
    <main>
      <section>
        <p>
          Olá! Seja bem-vindo(a) ao meu portifólio.
        </p>

        <p>
          Meu nome é <span>Nicolle</span> e eu sou uma desenvolvedora web
        </p>

        <div id="redes-sociais">
          <a href="#">
            <img src={iconeGithub} alt="" srcSet="" />
          </a>

          <a href="#">
            <img src={iconeLinkedin} alt="" srcSet="" />
          </a>
        </div>

        <a href="#sobreMim">
          <button>Conheça mais sobre mim</button>
        </a>
      </section>

      <section>
        <img id="imagemDev" src={imagemDev} />
      </section>
    </main>
     
  )
}

export default App
