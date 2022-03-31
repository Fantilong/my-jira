import React from "react";
import { useAuth } from "context/auth-context";
import { ProjectListScreen } from "screens/project-list";
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftWareLogo } from "assets/software-logo.svg";
import { Menu, Dropdown, Button } from "antd";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ProjectScreen } from "screens/project";

export const AuthenticateApp = () => {
  return (
    <Container>
      <Main>
        <Router>
          <Routes>
            <Route path="/projects" element={<ProjectListScreen />}></Route>
            <Route
              path="/projects/:projectId"
              element={<ProjectScreen />}
            ></Route>
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

export const PageHeader = () => {
  const { logout, user } = useAuth();

  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <SoftWareLogo width="18rem" color="rgb(38, 132, 255)"></SoftWareLogo>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout">
                <Button type="text" onClick={logout}>
                  登出
                </Button>
              </Menu.Item>
            </Menu>
          }
        >
          <Button type="text">Hi, {user?.name}</Button>
        </Dropdown>
      </HeaderRight>
    </Header>
  );
};

// const HeaderItem = styled.h3`
//   margin-right: 3rem;
// `;

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main``;
