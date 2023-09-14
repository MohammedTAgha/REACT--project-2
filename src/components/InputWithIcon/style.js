import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 36px 1fr;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.gray300};
    border-radius: 4px;
    ${props => props.background ? "background-color:" + props.background + ";" : ""}

<<<<<<< HEAD
  .input__subscribe {
    border: unset;
    width : 100%;
  
    :focus {
      box-shadow: unset;
      border: unset;
=======
    .icon{
        display: flex;
        align-items: center;
        justify-content: center;
>>>>>>> 8511f4f172a0bc6c88ec439c48c3423165284ff4
    }

    input{
        border:unset;
        :focus{
            box-shadow: unset;
            border: unset;
        }
    }
`

export default Style;