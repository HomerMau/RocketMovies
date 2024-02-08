import styled from "styled-components";

export const Container = styled.div`
     img {

       width: 6.4rem;
       height: 6.4rem;
       border-radius: 50%;
       border: 0.1rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
  }
    
`