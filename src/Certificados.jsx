import React, { useRef } from 'react';

function Certificados(){

    const certScrollerRef = useRef(null);

    const scrollLeft = () => {
      if (certScrollerRef.current) {
        certScrollerRef.current.scrollBy({
          top: 0,
          left: -200,
          behavior: 'smooth'
        });
      }
    };
  
    const scrollRight = () => {
      if (certScrollerRef.current) {
        certScrollerRef.current.scrollBy({
          top: 0,
          left: 200,
          behavior: 'smooth'
        });
      }
    };

    const meusCertificados = [
        {id: 1, name: "Big Data", jpg: "src/JPGs/Big Data - Introdução e Oportunidades (online) - 1 horas.jpg"},
        {id: 2, name: "C# Módulo I", jpg: "src/JPGs/CSharp 2017 - Módulo I (online) - 21 horas.jpg"},
        {id: 3, name: "C# Módulo II", jpg: "src/JPGs/CSharp 2017 - Módulo II (online) - 21 horas.jpg"},
        {id: 4, name: "Canvas I", jpg: "src/JPGs/Canvas - Composição Gráfica para Web (online) - 20 horas.jpg"},
        {id: 5, name: "Canvas II", jpg: "src/JPGs/Canvas - Design de Interação (online) - 20 horas.jpg"},
        {id: 6, name: "Desenvolvimento Games", jpg: "src/JPGs/Engine 2D - Desenvolvendo Games (online) - 4 horas.jpg"},
        {id: 7, name: "Fundamentos de IA", jpg: "src/JPGs/Fundamentos de Inteligência Artificial e Chatbot com IBM Watson (online) - 4 horas.jpg"},
        {id: 8, name: "Fundamentos de IoT", jpg: "src/JPGs/Fundamentos de Internet das Coisas (IoT) (online) - 2 horas.jpg"},
        {id: 9, name: "Fundamentos de Machine Learning", jpg: "src/JPGs/Fundamentos de Machine Learning na Prática (online) - 6 horas.jpg"},
        {id: 10, name: "Fundamentos de SOC", jpg: "src/JPGs/Fundamentos de SOC - Security Operations Center (online) - 6 horas.jpg"},
        {id: 11, name: "HTML5 Fundamentos", jpg: "src/JPGs/HTML5 Fundamentos (online) - 40 horas.jpg"},
        {id: 12, name: "Lógica de Programação", jpg: "src/JPGs/Introdução à Lógica de Programação (online) - 40 horas.jpg"},
        {id: 13, name: "Programação Orientada a Objeto", jpg: "src/JPGs/Introdução à Programação Orientada a Objeto (online) - 16 horas.jpg"},
        {id: 14, name: "Java Completo", jpg: "src/JPGs/Java - Criando uma Aplicação Completa (online) - 16 horas.jpg"},
        {id: 15, name: "Java Módulo I", jpg: "src/JPGs/Java Programmer - Módulo I (online) - 40 horas.jpg"},
        {id: 16, name: "Java Módulo II", jpg: "src/JPGs/Java Programmer - Módulo II (online) - 30 horas.jpg"},
        {id: 17, name: "Java Módulo III", jpg: "src/JPGs/Java Programmer - Módulo III (online) - 30 horas.jpg"},
        {id: 18, name: "JavaScript", jpg: "src/JPGs/JavaScript - Programando com a Linguagem (online) - 18 horas.jpg"},
        {id: 19, name: "MongoDB", jpg: "src/JPGs/MongoDB - Introdução Prática (online) - 6 horas.jpg"},
        {id: 20, name: "MySQL", jpg: "src/JPGs/MySQL - Criando e Manipulando Banco de Dados (online) - 25 horas.jpg"},
        {id: 21, name: "PHP", jpg: "src/JPGs/PHP - Conceitos Essenciais (online) - 21 horas.jpg"},
        {id: 22, name: "Python", jpg: "src/JPGs/Python - Programando com a Linguagem (online) - 6 horas.jpg"},
        {id: 23, name: "SQL 2016 - Módulo I", jpg: "src/JPGs/SQL 2016 - Criando Sistemas de Banco de Dados (online) - 22 horas.jpg"},
        {id: 24, name: "SQL 2016 - Módulo II", jpg: "src/JPGs/SQL 2016 - Programação em T-SQL (online) - 22 horas.jpg"},
        {id: 25, name: "UX", jpg: "src/JPGs/UX - Do Conceito à Aplicação (online) - 5 horas.jpg"}
    ];

    const certificadoList = meusCertificados.map(cert => <li className="cert" key={cert.id}>
                                                    <h3>{cert.name}</h3>
                                                    <img width="150" src={cert.jpg} alt="" />
                                                </li>)
    return(
        <section className="certSection ">
            <h2>Certificados</h2>
            <div className="certScroller">
                <span className="material-symbols-outlined"onClick={scrollLeft} >arrow_left</span>
                <ul className="certList" ref={certScrollerRef}>{certificadoList}</ul>
                <span className="material-symbols-outlined" onClick={scrollRight}>arrow_right</span>
            </div>
        </section>
    )
}

export default Certificados