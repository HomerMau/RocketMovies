/* eslint-disable react/prop-types */
import { Container } from "./styles"
import { Tag } from "../Tag"
import { FiStar } from "react-icons/fi"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <main>
        <div className="movieName">
          <h1>{data.title}</h1>
          <div className="stars">

          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          <FiStar />
          </div>
        </div>

        <p>{data.description}</p>

        {data.tags && (
          <footer>
            {data.tags.map((tag) => {
              return <Tag key={tag.id} title={tag.name} />
            })}
          </footer>
        )}
      </main>
    </Container>
  )
}
