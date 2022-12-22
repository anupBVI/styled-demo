import React, { ChangeEvent, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "../src/App.css";
import { Body, Content, ContentBody, ContentHeader, Header, Layout, SubTitle, Title } from "./components/Layout";
import { ITask } from "./Interfaces/interface";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";


const App = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<ITask[]>([]);

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
    e.preventDefault()
    const newTask = { taskName: task, deadline: deadline };
    if (task !== "") {
      setList([...list, newTask]);
      setTask("");

      setTimeout(() => {
        alert("New Task created");
      }, 100);
      setDeadline(0);
    } else {
      alert("task name should not be empty");
    }
  };

  const deleteTask = (taskNameToDelete: string): void => {
    setList(
      list.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
    setTimeout(() => {
      alert("Task Deleted successfully");
    }, 100);
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <Layout>
        <Header>
          <Title>Welcome to Task Manager</Title>

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
              <button type="submit">Add Task</button>
            </div>
          </form>
        </Header>

        <Content>
          {
            list.length !== 0 ? <Body>
              <ContentHeader>
                <div>Task Name</div>
                <div>Task Deadline</div>
                <div>Action</div>
              </ContentHeader>


              {
                list.map((item, index) => {
                  return (

                    <ContentBody key={index}>
                      <div>{item.taskName}</div>
                      <div>{item.deadline} {item.deadline > 1 ? "Days" : "Day"}</div>
                      <div>
                        <button>Complete</button>
                        <button onClick={() => { deleteTask(item.taskName) }}>Delete</button>
                      </div>
                    </ContentBody>
                  )
                })
              }

            </Body> : <SubTitle>No Tasks available</SubTitle>
          }

        </Content>
      </Layout>

    </ThemeProvider>
  );
};

export default App;
