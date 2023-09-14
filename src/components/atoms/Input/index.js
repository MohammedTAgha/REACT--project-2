import styled from "styled-components";
export const InputGroup = styled.div`
  margin: 20px 0;
`;
export const Input = styled.input`
  padding: 7px;
  width: 274px;

  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.colors.dark};
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme.colors.gray400};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme.colors.gray400};
  }

  border: 1px solid
    ${(props) =>
      props.theme
        ? props.theme.colors.baseColorRed
        : props.theme.colors.gray200};
  border-radius: 6px;
  outline: none;

  width: ${(props) => (props.width ? props.width : 100)}%;
  transition: 0.3s all ease-in-out;

  &:focus {
    box-shadow: 0px 0px 5px 5px ${(props) => props.theme.colors.gray200};
    border: 1px solid
      ${(props) =>
        props.theme
          ? props.theme.colors.baseColorRed
          : props.theme.colors.dark};
  }
`;

export const InputLabel = styled.p`
  color: ${(props) => props.theme.colors.dark};
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: ${(props) => props.theme.fontSizes.xl};
  letter-spacing: -0.2px;

  &::first-letter {
    text-transform: uppercase;
  }

  margin-bottom: 5px;
  user-select: none;
`;