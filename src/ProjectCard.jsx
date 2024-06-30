
function ProjectCard(props){

    return(
        <div className="projeto fadeInEffect">
            <h2>{props.title}</h2>
            <div className="projetoImg">
                <img src={props.img} alt="" />
            </div>
            {props.info!="" ? props.info : <p>Descrição do projeto em breve</p>}
            {props.github!="" ? <p>Link GitHub: {props.github}</p> : false}
        </div>
    );
}

ProjectCard.defaultProps = {
    title: "Futuro Projeto Secreto",
    img: "src/assets/UnknownImg.jpeg",
    info: "",
    github: ""
}

export default ProjectCard