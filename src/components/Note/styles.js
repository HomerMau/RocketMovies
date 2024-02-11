import styled from 'styled-components'

export const Container = styled.button`
  border-radius: 1.6rem;
  border: none;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  margin-bottom: 2.4rem;

  main {
    max-height: 22.3rem;
    max-width: 112rem;
    padding: 3.2rem;


    > .movieName {
      display: flex;
      flex-direction: column;
      align-items: start;

      > .stars {
        margin: 0.8rem 0 1.5rem 0;

        display: flex;

        gap: 0.6rem;
      }
    }

    h1 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: bold;
      font-size: 2.4rem;
    }

    svg {
      height: 1.2rem;
      width: 1.2rem;

      color: ${({ theme }) => theme.COLORS.PINK};
      fill: ${({ theme }) => theme.COLORS.PINK};
    }

    svg:last-child {
      fill: none;
    }
  }

  p {
    display: flex;
    text-align: start;
    font-weight: 400;
    font-size: 1.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  footer {
    margin-top: 1.5rem;

    display: flex;

    span {
      background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`
