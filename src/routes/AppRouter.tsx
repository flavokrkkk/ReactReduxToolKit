import { Route, Routes } from "react-router-dom";
import { publicRoute } from "./routes";
import UserPage from "../Pages/UserPage";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoute.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}
      <Route path="*" Component={UserPage} />
    </Routes>
  );
};

export default AppRouter;
