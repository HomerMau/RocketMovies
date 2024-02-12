import styled from "styled-components"

export const Container = styled.div`
  > header {
    width: 100%;
    height: 14.4rem;
    display: flex;

    background: ${({ theme }) => theme.COLORS.GRAY_500};

    a {
      margin-left: 14.4rem;

      display: flex;
      align-items: center;
      gap: 0.8rem;

      color: ${({ theme }) => theme.COLORS.PINK};

      font-size: 1.6rem;
    }
  }
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 165%;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }


  button {
    margin-top: 2.4rem;
    width: 45%;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 3.2rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;
    
    background-color: ${({ theme }) => theme.COLORS.PINK};
    
    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
