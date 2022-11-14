import React from "react";
import { Card, Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTaskAction } from "../../redux/actions/task.action";

const CreateTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateTask = (values) => {
    dispatch(createTaskAction({ values }));
    navigate("/tasks/");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            color: "white",
            margin: 0,
          }}
        >
          NEW TASK
        </h1>
        <Button
          ghost
          style={{ marign: "0 16px 0 0" }}
          onClick={() => navigate("/tasks")}
        >
          Back
        </Button>
      </div>
      <Card size="small">
        <Form
          name="createTask"
          layout="vertical"
          onFinish={(values) => handleCreateTask(values)}
        >
          <Form.Item
            label="Task title"
            name="title"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
              {
                type: "string",
                min: 3,
                message: "This field must be more than 3 characters!",
              },
            ]}
          >
            <Input placeholder="Input task title" />
          </Form.Item>
          <Form.Item
            label="Task content"
            name="content"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
              {
                type: "string",
                min: 3,
                message: "This field must be more than 3 characters!",
              },
            ]}
          >
            <Input placeholder="Input task content" />
          </Form.Item>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            block
            ghost
            htmlType="submit"
          >
            Add Task
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default CreateTask;
