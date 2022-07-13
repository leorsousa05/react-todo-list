import styled from "styled-components"

export const Button = styled.button`
  cursor: pointer;
  border: 1px solid #875fff7c;
  padding: 1rem 1rem;
  font-size: .7rem;
  border-radius: 4px;
  background-color: white;
  font-family: "block-font";
  color: #39334ad4;

  & ::placeholder {
    color: #39334ad4;
  }

  @media (max-width: 540px) {
    padding: .6rem 1rem;
  }
`