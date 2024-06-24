import { Routes, Route } from "react-router-dom";
import Models from "../pages/Models";
import  Options from "../pages/Options"
import Home from "../pages/Home";
import AdminSettings from "../pages/AdminSettings";

const Router = () => {

  return (
    <Routes>
      <Route key={"Home"} path={`/`} element={<Home />} />
      <Route key={"SelectModel"} path={`/quotation`} element={<Models />} />
      <Route key={"Option"} path={`/quotation/:modelCode`} element={<Options />} />
      <Route key={"AdminSettings"} path={`/admin-settings`} element={<AdminSettings />}/>
    </Routes>
  );
};

export default Router;