
function MainArea(){
    const skills = ["Python","Java","C#","HTML5","CSS","JavaScript","PhP","React","NodeJS","MySQL","SQL","MongoDB"]

    const skillsList = skills.map(skill => <p key={skill}>{skill}</p>)
    return(
        <section className="mainArea">
            <div style={{'--width':'250px'}}className="profilePicArea">
                <div className="backgroundPic"></div>
                <img className="picture" src="src/assets/MyPicture2.png" alt="" />
                <img src="src/assets/HologramBase.png" alt="" />
            </div>
            <div className="infoArea">
                <h2>Leonardo Lima</h2>
                <h2>Desenvolvedor Full Stack</h2>
                <div className="infoAreaFooter">
                    <h3>Leon_lima01@hotmail.com</h3>
                    <div className="horizontalFlex">
                        <h3>Idade: 28 Anos</h3>
                        <h3>Local: Brasil - SP</h3>
                    </div>
                </div>
                <div className="infoAreaSkills">
                    {skillsList}
                </div>
            </div>

        </section>
    )
}

export default MainArea