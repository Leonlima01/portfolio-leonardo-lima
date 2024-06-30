import Header from './Header'
import IDCard from './IDCard'
import Certificados from './Certificados'
import Projetos from './Projetos'
import Sobre from './Sobre'
import MainArea from './MainArea'

function App() {
  return (
    <div className="mainPage">
      <Header/>
      <MainArea/>
      <Sobre/>
      <Projetos/>
      <Certificados/>
    </div>
  )
}

export default App
