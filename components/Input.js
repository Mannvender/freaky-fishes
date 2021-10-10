import styled from "styled-components";

export default styled.input`
  text-align: center;
  background: transparent;
  border: none;
  border: ${(props) => props.theme.colors.light1} 1px solid;
  padding: 1rem 0.5rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.light};
  font-size: 1.5rem;
  font-family: inherit;
  outline: none;
  appearance: textfield;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
