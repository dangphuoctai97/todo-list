import { Route, Routes, Navigate } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import Tasks from "./pages/Tasks";
import CreateTask from "./pages/CreateTask";
import UpdateTask from "./pages/UpdateTask";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.globalContainer}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<CreateTask />} />
          <Route path="/tasks/update/:id" element={<UpdateTask />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
