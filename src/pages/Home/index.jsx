import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Container, MyMovies } from "./styles"
import { FiPlus } from "react-icons/fi"

export function Home() {
  return (
    <Container>
      <Header name="Tiago Lucas" />

      <main>
        <MyMovies>
          <h2>Meus filmes</h2>
          <Button icon={FiPlus} title="Adicionar filme">
          </Button>
        </MyMovies>
      </main>
    </Container>
  )
}
