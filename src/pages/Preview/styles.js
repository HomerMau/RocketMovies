import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 09.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;

    max-width: 113.7rem;
    margin: 6rem auto;
    
    overflow-y: scroll;
    
  }
  `

export const Informations = styled.div`

  > .return {
    display: flex;
    align-items: center;

    font-weight: 400;

    gap: 0.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > .movieName {
    display: flex;
    align-items: center;

    margin: 2.4rem 0;

    > h1 {
      font-weight: 500;
      margin-right: 1.9rem;
    }

    > svg {
      display: flex;

      margin-right: 1.25rem;

      height: 2rem;
      width: 2rem;

      color: ${({ theme }) => theme.COLORS.PINK};
      fill: ${({ theme }) => theme.COLORS.PINK};
    }

    > svg:last-child {
      fill: none;
    }
  }

  > .author {
    display: flex;
    align-items: center;

    margin-bottom: 4rem;

    img,
    svg {
      display: flex;
      width: 1.6rem;
      height: 1.6rem;

      margin-bottom: -0.27rem;

      margin-right: 0.8rem;
    }

    svg {
      margin-left: 0.8rem;
      color: ${({ theme }) => theme.COLORS.PINK}
    }

    h3,
    span {
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
  .tags {
    margin-bottom: 4.0rem;
  }

`