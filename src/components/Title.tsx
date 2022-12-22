import React from "react";
import styled from "styled-components";
import { StyledTitle } from "../styles/Layout.styles";
import { Theme } from "../styles/Theme";

type TitleProps = {
  text: string;
};

export const Title = (props: TitleProps) => {
  return <StyledTitle>{props.text}</StyledTitle>;
};
