import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Kanban } from "screens/kanban";
import { EpicScreen } from "screens/epic";

export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to="kanban">看板</Link>
      <Link to="epic">任务组</Link>
      <Routes>
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/epic" element={<EpicScreen />} />
      </Routes>
      {/* <Navigate to={window.location.pathname + '/kanban'} /> */}
    </div>
  );
};
