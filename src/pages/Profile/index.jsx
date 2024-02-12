import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft />
          <span>Voltar</span>
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/HomerMau.png" alt="Foto do Usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          autoComplete="name"
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          autoComplete="email"
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          autoComplete="old-password"
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          autoComplete="new-password"
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}
