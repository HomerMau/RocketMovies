import { Container, Brand, Profile } from "./styles"
import { Input } from "../Input"
import { Avatar } from "../Avatar"

export function Header({ name }) {
  return (
    <Container>
      <Brand>RocketMovies</Brand>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">

        <div>
          <strong>{ name }</strong>
          <a href="#"><span>sair</span></a>
        </div>

        <Avatar />

      </Profile>
    </Container>
  )
}