import { Container, Brand, Profile } from "./styles"
import { Input } from "../Input/input"

export function Header() {
  return (
    <Container>
      <Brand>RocketMovies</Brand>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">

        <div>
          <strong>Tiago Lucas</strong>
          <a href="#"><span>sair</span></a>
        </div>

        <img src="https://github.com/HomerMau.png" alt="Foto do usuário" />

      </Profile>
    </Container>
  )
}