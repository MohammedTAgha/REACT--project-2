"use client";
import styled from "styled-components";

// function to handle variant
const getStylesByVariant = ({ variant, theme }) => {
  if (variant == "primary") {
    return `
    background-color: ${theme.colors.baseColorBlue};
    color: ${theme.colors.whiteColor};
    border-color : ${theme.colors.baseColorBlue} ;
    
    &:hover{
      background-color: transparent;
      border-color : ${theme.colors.baseColorBlue} ;
      color : ${theme.colors.baseColorBlue} ;
    }
    
  `;
  } else if (variant == "secondary") {
    return `
      background-color: ${theme.colors.whiteColor};
      color: ${theme.colors.baseColorBlue};
      border-color : ${theme.colors.gray300};
      &:hover{
        background-color: ${theme.colors.baseColorBlue};
        border-color : ${theme.colors.baseColorBlue} ;
        color : ${theme.colors.whiteColor} ;
      }

    `;
  } else if (variant == "warning") {
    return `
      background-color: ${theme.colors.whiteColor};
      color: ${theme.colors.baseColorRed};
      border-color : ${theme.colors.gray300};
      &:hover{
        background-color: ${theme.colors.baseColorRed};
        border-color : ${theme.colors.baseColorRed} ;
        color : ${theme.colors.whiteColor} ;
      }

    `;
  } else if (variant == "success") {
    return `
      background-color: ${theme.colors.baseColorGreen};
      color: ${theme.colors.whiteColor};
      border-color : ${theme.colors.baseColorGreen};
      &:hover{
        background-color: transparent;
        border-color : ${theme.colors.baseColorGreen} ;
        color : ${theme.colors.baseColorGreen} ;
      }

    `;
  } else if (variant == "orange") {
    return `
      background-color: ${theme.colors.baseColorOrange};
      color: ${theme.colors.whiteColor};
      border-color : ${theme.colors.baseColorOrange};
      &:hover{
        background-color: transparent;
        border-color : ${theme.colors.baseColorOrange} ;
        color : ${theme.colors.baseColorOrange} ;
      }

    `;
  }
};
export const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  font-size: ${(props) => props.theme.fontSizes.md};
  padding: 7px 0px;
  transition: 0.5s all;

  ${(props) => {
    return getStylesByVariant(props);
  }}
  .button__Subscribe {
    width: 110px;
    height: 40px;
  }
`;
