import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTaskAction } from "../../redux/actions/task.action";
import { EditFilled, DeleteFilled } from "@ant-design/icons";

export const Item = ({ id, title, content }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTaskAction({ id }));
  };

  return (
    <Card
      style={{
        width: "100%",
      }}
      size="small"
      hoverable={true}
      type="inner"
      title={<h2 style={{ margin: 0 }}>{title}</h2>}
      extra={
        <div
          style={{
            display: "flex",
            paddingLeft: "16px",
          }}
        >
          <Button
            style={{ border: "1px solid black" }}
            onClick={() => navigate(`/tasks/update/${id}`)}
            icon={<EditFilled />}
          ></Button>
          <Button
            style={{ marginLeft: "8px" }}
            danger
            onClick={() => handleDeleteTask(id)}
            icon={<DeleteFilled />}
          ></Button>
        </div>
      }
    >
      {content}
    </Card>
  );
};

export default Item;
