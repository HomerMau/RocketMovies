import styled from "styled-components"

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  margin-right: 0.8rem;
  border-radius: 8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE_200};
`
