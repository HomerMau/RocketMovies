import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  width: 45%;
  border-radius: 1rem;


  margin-bottom: 0.8rem;

  svg {
    margin-left: 1rem;
  }

  > input {

    border-top-right-radius: 1rem;border-bottom-right-radius: 1rem;
    
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`


