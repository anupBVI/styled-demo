import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100%;
  padding: 10px 6px;
`;

type BtnProps = {
  text: string;
  type: string;
  bg: string;
  handleClick?: () => void;
};

export const Button = (props: BtnProps) => {
  return (
    <StyledBtn
      type="submit"
      onClick={props.handleClick}
      style={{ background: props.bg }}
    >
      {props.text}
    </StyledBtn>
  );
};
