import React from "react";
import { Form, Input, Card, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateTaskAction } from "../../redux/actions/task.action";

const UpdateTask = () => {
  const params = useParams();
  let navigate = useNavigate();
  const [updateForm] = Form.useForm();
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.task);

  const getInitialValues = () => {
    const task = taskList.find((item) => item.id === params.id);
    return {
      title: task.title,
      content: task.content,
    };
  };

  const handleUpdateTask = (values, id) => {
    dispatch(updateTaskAction({ values, id }));
    navigate("/tasks");
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
          EDIT TASK
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
          form={updateForm}
          layout="vertical"
          initialValues={getInitialValues()}
          onFinish={(values) => {
            handleUpdateTask(values, params.id);
          }}
        >
          <Form.Item
            label="Nhiệm vụ"
            name="title"
            rules={[
              {
                required: true,
                message: "Bạn cần nhập nhiệm vụ",
              },
              {
                type: "string",
                min: 4,
                message: "Tên nhiệm vụ phải lớn hơn 4 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nội dung nhiệm vụ"
            name="content"
            rules={[
              {
                required: true,
                message: "Bạn cần nhập nội dung nhiệm vụ",
              },
              {
                type: "string",
                min: 4,
                message: "Nội dung nhiệm vụ phải lớn hơn 4 kí tự!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            ghost
            block
            htmlType="submit"
          >
            Edit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default UpdateTask;
