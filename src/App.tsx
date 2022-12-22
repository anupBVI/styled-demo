import React, { ChangeEvent, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "../src/App.css";
import { Button } from "./components/Button";
import { ContentBody } from "./components/ContentBody";
import { ContentHeader } from "./components/ContentHeader";
import { Body, Content, Header, Layout } from "./styles/Layout.styles";
import { SubTitle } from "./components/SubTitle";
import { Title } from "./components/Title";
import { ITask } from "./Interfaces/interface";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const CreateNotify = () => toast.success("Task Created Successfully!");
  const DeleteNotify = () => toast.success("Task Deleted Successfully!");
  const ErrorNotify = () => toast.error("Please Enter a Task Name");
  const CompleteNotify = () => toast.success("Marked Completed!");
  const ResumeNotify = () => toast.success("Marked Incomplete!");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let { name, value } = e.target;
    console.log(name);
    if (name === "task") {
      setTask(value);
    } else {
      setDeadline(+value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTask = { taskName: task, deadline: deadline };
    if (task !== "") {
      CreateNotify();
      setList([...list, newTask]);
      setTask("");

      setDeadline(0);
    } else {
      ErrorNotify();
    }
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setList(
      list.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
    DeleteNotify();
  };

  const completeTask = () => {
    setCompleted(!completed);
    if (completed) {
      ResumeNotify()
    }else{
      CompleteNotify()
    }
  };

  const Form = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="task"
            value={task}
            type="text"
            placeholder="Enter Task Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="deadline"
            value={deadline}
            type="number"
            placeholder="Enter Task Deadline"
            onChange={handleChange}
          />
        </div>
        <div>
          <Button text="Add Task" type="submit" bg="white" />
        </div>
      </form>
    );
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ToastContainer position="bottom-center" autoClose={1000} />
      <Layout>
        <Header>
          <Title text="Welcome to Task Manager" />
          {/* <Form/> */}
          {Form()}
        </Header>

        <Content>
          {list.length !== 0 ? (
            <Body>
              <ContentHeader
                name="Task Name"
                deadline="Task Deadline"
                actions="Actions"
              />

              {list.map((item, index) => {
                return (
                  <ContentBody
                    key={index}
                    Data={item}
                    deleteTask={deleteTask}
                    completeTask={completeTask}

                    btn ={completed ? {text:" Resume", color:"green"} : {text:"Complete", color:"Blue"} }
                    // btnColor={completed ? "green" : "blue"}
                  />
                );
              })}
            </Body>
          ) : (
            <SubTitle text="No Tasks Available" />
          )}
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
