import styled, { css } from "styled-components";

export const TaskWrapper = styled.div`
  background-image: url("https://img.wallpapersafari.com/desktop/1680/1050/57/25/zja5nO.jpg");
  background-size: cover;
  min-height: ${(props) => props.contentHeight}px;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  min-height: 85vh;
  margin-top: 50px;
`;
