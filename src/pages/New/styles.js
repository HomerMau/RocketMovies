import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    width: 100%;
    grid-area: content;
    overflow-y: auto;
  }
`

export const Form = styled.form`
  max-width: 113.7rem;
  margin: 3.8rem auto;

  > header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 36px;

    a {
      display: flex;
      align-items: center;

      gap: 0.8rem;
      color: ${({ theme }) => theme.COLORS.PINK};

      margin-bottom: 2.4rem;
    }

    a,
    h1 {
      font-weight: 400;
    }
  }

  .section {
    width: 100%;
    display: flex;
    justify-content: space-between;

    gap: 8rem;

    button {
      margin: 0;
    }

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  .markers {
    h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_300};

      margin: 4rem 0 2.4rem;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;

    border-radius: 0.8rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    margin-bottom: 4rem;
  }
`
