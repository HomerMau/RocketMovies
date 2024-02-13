import { styled } from "styled-components"
import { Link } from "react-router-dom";


export const Container = styled.div`
  > main {
    grid-area: content;

    max-width: 113.7rem;
    margin: 3.7rem auto;

  }
`



export const MyMovies = styled.div`
  max-width: 108.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > .button {
    width: 20.7rem;
    margin: 0;
    padding: 0;
  }

  > h2 {
    font-weight: 400;
    font-size: 3.2rem;
  }
`