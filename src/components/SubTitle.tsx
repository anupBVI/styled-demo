import React from "react";
import styled from "styled-components";
import { StyledSubTitle } from "../styles/Layout.styles";
import { Theme } from "../styles/Theme";

type SubTitleProps = {
  text: string;
};

export const SubTitle = (props: SubTitleProps) => {
  return <StyledSubTitle>{props.text}</StyledSubTitle>;
};
