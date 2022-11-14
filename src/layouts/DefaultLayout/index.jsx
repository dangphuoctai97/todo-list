import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import * as S from "./style";

const DefaultLayout = () => {
  const contentHeight = window.innerHeight;
  console.log(contentHeight);
  return (
    <>
      <S.TaskWrapper contentHeight={contentHeight}>
        <S.TaskContainer>
          <S.TaskContent>
            <Outlet />
          </S.TaskContent>
        </S.TaskContainer>
      </S.TaskWrapper>
    </>
  );
};

export default DefaultLayout;
