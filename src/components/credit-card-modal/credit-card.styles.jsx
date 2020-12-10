import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  margin-left: 5rem;
  width: 20%;
`;

export const DateAndCVCContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  & > div {
    margin: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;

  & button {
    margin: 0 5px;
  }
`