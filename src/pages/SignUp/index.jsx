import { FiMail, FiLock, FiArrowLeft, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom"


import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Background } from "./styles"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div className="informations">
          <Input placeholder="Nome" type="namtexte" icon={FiUser} autoComplete="name" />

          <Input placeholder="E-mail" type="text" icon={FiMail} autoComplete="email" />

          <Input placeholder="Senha" type="password" icon={FiLock} autoComplete="new-password" />
        </div>

        <Button title="Entrar" />

        <div className="create">
          <FiArrowLeft />
          <Link to="/">Voltar para o login</Link>
        </div>
      </Form>
      <Background />
    </Container>
  )
}
