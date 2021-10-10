import styled, { css } from "styled-components";

export const buttonCss = css`
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.colors.light};
  background-color: ${(props) => props.theme.colors.accent2};
  min-width: 264px;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 1.25rem;
  padding: 2rem 3rem;
  pointer-events: auto;
  cursor: pointer;
  margin-bottom: 32px;
  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
  }
`;
const StyledButton = styled.button`
  ${buttonCss}
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
`;

export default StyledButton;
