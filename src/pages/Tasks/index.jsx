import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Empty, Input, List } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import Item from "./Item";
import * as S from "./style";

const Tasks = () => {
  let navigate = useNavigate();
  const { taskList } = useSelector((state) => state.task);
  const [searchValues, setSearchValues] = useState("");

  const newtaskList = taskList.filter(
    (item) =>
      item.title.toLowerCase().indexOf(searchValues.trim().toLowerCase()) !== -1
  );

  const renderTaskList = () => {
    if (!newtaskList)
      return (
        <Empty>
          <Button>Create a new task now!</Button>
        </Empty>
      );

    return (
      <List
        itemLayout="vertical"
        dataSource={newtaskList}
        renderItem={(item) => (
          <List.Item
            style={{
              borderBottom: "none",
            }}
          >
            <Item
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
            />
          </List.Item>
        )}
      ></List>
    );
  };

  return (
    <>
      <S.TaskHeader>
        <h1 style={{ color: "white", margin: 0 }}>To Do List</h1>
        <Button
          style={{ color: "white" }}
          ghost
          onClick={() => navigate("/tasks/create")}
        >
          Add a new task
        </Button>
      </S.TaskHeader>
      <Input.Search
        placeholder="Type here to search..."
        onChange={(e) => setSearchValues(e.target.value)}
        value={searchValues}
      />
      {renderTaskList()}
    </>
  );
};

export default Tasks;
