import styled from "styled-components";

export const Container = styled.textarea`
margin-top: 4rem;
  width: 100%;
  height: 27rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 1.0rem;
  border-radius: 1.0rem;
  padding: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`