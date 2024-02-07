import { styled } from "styled-components";

export const Container = styled.div`
  width: 50%;
  
  
  > input {
    height: 5.6rem;
    width: 100%;
    
    padding: 1.2rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 1.0rem;
    border: 0;

    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }

`;


