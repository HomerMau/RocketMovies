import { styled } from "styled-components"

export const Container = styled.div`
  > main {
    grid-area: content;

    max-width: 113.7rem;
    margin: 3.7rem auto;

    overflow-y: auto;
  }
`



export const MyMovies = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    width: 20.7rem;
  }

  > h2 {
    font-weight: 400;
    font-size: 3.2rem;
  }
`