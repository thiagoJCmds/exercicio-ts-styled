import GlobalStyles, { Container } from './Global.Styles'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'




function App() {
  return (
    <>
      <GlobalStyles/>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
