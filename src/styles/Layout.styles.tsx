import styled from "styled-components";
import { Theme } from "./../styles/Theme";

export const Layout = styled.main`
  width: 100vw;
  height: 100vh;
  background: #0f3f56;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  width: 80%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  form {
    width: 60%;
    padding: 4px 12px;
    display: flex;
    gap: 12px;
    div {
      &:nth-child(1) {
        flex: 3;
      }
      &:nth-child(2) {
        flex: 1;
      }
      input,
      button {
        width: 100%;
        padding: 10px 6px;
      }
      input {
        outline: none;
      }
    }
  }
`;


export const StyledTitle = styled.h2`
color: white;
font-family: ${() => Theme.font.primary};
font-weight: ${() => Theme.font.extrabold};
text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
letter-spacing: 0.1rem;
`;

export const StyledSubTitle = styled.h3`
  color: white;
  /* font-family: 'Poppins', sans-serif; */
  font-family: ${() => Theme.font.primary};
  font-weight: ${() => Theme.font.regular};
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.6);
  letter-spacing: 0.1rem;
`;

export const Content = styled.section`
  width: 80%;
  /* background: green; */
  /* height: 400px; */
  display: flex;
  justify-content: center;
  padding: 12px;
`;

export const Body = styled.section`
  width: 80%;
  background: #31ccff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  padding: 12px;
`;
export const StyledContentHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 3px;
  justify-content: center;
  padding: 4px;
  color: white;
  font-family: ${() => Theme.font.primary};
  font-weight: ${() => Theme.font.bold};
  letter-spacing: 0.1rem;
  div {
    background: #132c58;
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      flex: 2;
    }
    &:nth-child(2) {
      flex: 2;
    }
    &:nth-child(3) {
      flex: 1;
    }
  }
`;
export const StyledContentBody = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  gap: 3px;
  justify-content: center;
  padding: 5px;
  font-family: ${() => Theme.font.primary};
  font-weight: ${() => Theme.font.regular};
  div {
    background: #2d53b0;
    display: flex;
    padding: 8px 4px;
    justify-content: center;
    align-items: center;
    color: white;
    &:nth-child(1) {
      flex: 2;
    }
    &:nth-child(2) {
      flex: 2;
    }
    &:nth-child(3) {
      flex: 1;
      display: flex;
      gap: 4px;
    }
    button {
      background-color: #0fd5c2;
      border: none;
      color: white;
      padding: 6px 12px;
      cursor: pointer;
      &:nth-child(2) {
        background-color: #ff3870;
      }
    }
  }
`;
