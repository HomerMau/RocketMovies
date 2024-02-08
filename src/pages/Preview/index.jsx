import { Container, Content, Informations } from "./styles"

import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Avatar } from "../../components/Avatar"

export function Preview() {
  return (
    <Container>
      <Header name="Tiago Lucas" />

      <main>
        <Content>
          <Informations>
            <FiArrowLeft />
            <span>Voltar</span>

            <div className="movieName">
              <h1>Interstellar</h1>
              <FiStar />
              <FiStar /> 
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <div className="author">

            <Avatar />
            
            <h3 name>Por Tiago Lucas</h3>
              <FiClock />
            </div>

            <span>07/02/24 às 21:55</span>
            
          </Informations>
        </Content>
      </main>
    </Container>
  )
}
