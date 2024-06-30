
function IDCard(){
    const skills = ["Python","Java","C#","HTML5","CSS","JavaScript","PhP","React","NodeJS","MySQL","SQL","MongoDB"]

    const skillsList = skills.map(skill => <h2 className="skill" key={skill}>{skill}</h2>)
    return(
        <div className="idCardArea">
            <div className="idCard">
                <div className="idCardCenter">
                    <div className="idCardImg">
                        <img src="src/assets/MyPicture2.png" alt="myPicture" />
                    </div>
                    <div className="info">
                        <h2>Leonardo Lima</h2>
                        <h2>Desenvolvedor <br></br>Full Stack</h2>
                        <h3>Leon_lima01@hotmail.com</h3>
                    </div>
                </div>
                <div className="idCardFooter">
                    <h2>Idade: 28 Anos</h2>
                    <h2>Local: Brasil - SP</h2>
                </div>
                <div className="idCardSkills">
                    {skillsList}
                </div>
            </div>
        </div>
    );
}

export default IDCard