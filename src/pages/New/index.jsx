import { FiArrowLeft } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from '../../components/NoteItem';
import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">
              <FiArrowLeft />
              <span>Voltar</span>
            </a>
            <h1>Novo filme</h1>
          </header>

          <div className="section">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <div className="markers">
            <h2>Marcadores</h2>

            <div className="tags">
              <NoteItem value="Cinema" />
              <NoteItem placeholder="Novo marcador" value="" isNew />
            </div>

            <div className="section">
              <Button title="Excluir filme" />
              <Button title="Salvar alterações" />
            </div>
          </div>
        </Form>
      </main>
    </Container>
  )
}
