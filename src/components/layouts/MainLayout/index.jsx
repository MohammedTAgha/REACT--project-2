"use client";
import { Theme } from "@/constants/themes";
import store from "@/rtk/store";
import React from "react";
import {  Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

const MainLayout = ({ children }) => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        {children}
      </ThemeProvider>
      
    </Provider>
  );
};

export default MainLayout;
