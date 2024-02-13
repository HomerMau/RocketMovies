import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.div`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0px;
  }

  .informations {
    width: 220%;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  .create {
    display: flex;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin: 0 08rem;
    align-items: center;
    gap: .8rem;

    a {

      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  button {
    margin: 2.4rem 0;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
