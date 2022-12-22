import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces/interface";
import { Theme } from "../styles/Theme";
import { StyledContentBody } from "../styles/Layout.styles";
import { Button } from "./Button";

type DataProps = {
  Data: {
    taskName: string;
    deadline: number;
  };
  deleteTask: (taskName: string) => void;
  completeTask: ()=>void
  // btnColor?:string
  btn : {
    text:string;
    color:string
  }
};

export const ContentBody = (props: DataProps) => {
  const { deleteTask,completeTask,btn } = props;
  const { taskName, deadline } = props.Data;
  return (
    <StyledContentBody>
      <div>{taskName}</div>
      <div>
        {deadline} {deadline > 1 ? "Days" : "Day"}
      </div>
      <div>
        <Button
          handleClick={() => completeTask()}
          text={btn.text}
          type="submit"
          bg={btn.color}
        />

        <Button
          text="Delete"
          type="submit"
          bg="red"
          handleClick={() => deleteTask(taskName)}
        />
      </div>
    </StyledContentBody>
  );
};
