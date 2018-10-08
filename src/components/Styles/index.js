import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 20px;
	position: relative;

  &:nth-child(2n) {
    background-color: ${props => props.theme.primaryColor};
    & h2 {
      color: ${props => props.theme.lightTextColor};
    }
  }

  h2 {
    margin-bottom: 16px;
  }
`;
