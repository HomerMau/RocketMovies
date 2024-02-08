import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 64px 0;
  }
`


export const Content = styled.div`

  max-width: 113.7rem;

  margin: 0 auto;
`;

export const Informations = styled.div`

`;