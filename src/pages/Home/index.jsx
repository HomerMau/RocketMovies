import { Header } from "../../components/Header"
import { Container, MyMovies } from "./styles"

export function Home() {
  return (
    <Container>
      <Header name="Tiago Lucas" />

      <main>
        <MyMovies>
        <h2>Meus Filmes</h2>

        </MyMovies>
      </main>
    </Container>
  )
}
