import { styled } from 'styled-components'

export const Container = styled.header`
  height: 10.5rem;
  width: 100%;

  display: flex;
  justify-content: space-around;
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

export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 0.9rem;
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: end;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

  }
  

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 0.1rem;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

`