import styled from 'styled-components'
import { Link } from "react-router-dom"


export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.25rem;

  height: 4.8rem;
  border: 0;
  margin: 1.35rem 3.2rem;
  border-radius: 1.0rem;
  font-weight: 400;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

  &:disabled {
    opacity: 0.5;
  }
`