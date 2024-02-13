import { styled } from 'styled-components'
import { Link } from "react-router-dom"


export const Container = styled.header`
  height: 10.5rem;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

`

export const Brand = styled.div`
  font-size: 2.4rem;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  gap: 0.9rem;
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

  }
  



`