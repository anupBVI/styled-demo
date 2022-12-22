import React from "react";
import styled from "styled-components";
import { StyledContentHeader } from "../styles/Layout.styles";
import { Theme } from "../styles/Theme";

type ContentHeaderProps = {
  name: string;
  deadline: string;
  actions: string;
};
export const ContentHeader = (props: ContentHeaderProps) => {
  const { name, deadline, actions } = props;
  return (
    <StyledContentHeader>
      <div>{name}</div>
      <div>{deadline}</div>
      <div>{actions}</div>
    </StyledContentHeader>
  );
};
