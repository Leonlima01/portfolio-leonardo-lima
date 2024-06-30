import ProjectCard from "./ProjectCard";

function Projetos(){

    
    return(
        <section className="projetosSection">
            <h2 className="fadeInEffectText">Projetos de Aprendizado</h2>
            <div className="projetos">
                <ProjectCard    title="Marvel Comic Explorer" 
                                img="src/assets/MarvelComicExplorer.png" 
                                info={<p>Uma página Single Page Application utilizando API da Marvel para buscar personagens e quadrinhos em que ele participa.<br/>Utilizado React e requisições API.<br/><a href="https://marvel-comic-explorer.web.app/">Link</a></p>}
                                />
                <ProjectCard    title="Landing Page" 
                                img="src/assets/PrintNoWeb.PNG" 
                                info={<p>Uma Landing Page para teste de uma empresa ficticia, completa e responsiva, funcionando tanto em desktop quanto mobile.<br/>Utilizado somente HTML, CSS e JavaScript.</p>}
                                />
                <ProjectCard    title="OmdbAPI" 
                                img="src/assets/PrintOmdbAPI.PNG"
                                info={<p>Um programa feito em Python utilizando a API da Omdb para buscar informações de filmes, séries e jogos. Utiliza também de serviços Cloud do Firebase, o usuário cria uma conta e pode adicionar o que encontrar aos favoritos.</p>}
                                />
                <ProjectCard    title="Matrix Screen" 
                                img="src/assets/PrintMatrixProcessing.png"
                                info={<p>Um programa feito usando o software Processing, feito para praticar métodos draw() e praticar manipulação de vários objetos ao mesmo tempo.<br/>Funciona bem como papel de parede também.</p>}
                                />
                <ProjectCard    title="Jogo de Plataforma" 
                                img="src/assets/PrintJogoMegamanMockup.png"
                                info={<p>Um teste para um jogo de plataforma feito no software Godot, extremamente simples apenas com a base do jogo e sua engine focado para praticar minhas habilidades em lógica de programação e lógica de jogo.</p>}
                                />
                <ProjectCard/>
            </div>

        </section>
    );
}

export default Projetos