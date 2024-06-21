import { Routes, Route } from "react-router-dom";
import Models from "../pages/Models";
import  Options from "../pages/Options"

const Router = () => {

  return (
    <Routes>
      <Route key={"home"} path={`/`} element={<Models />} />
      <Route key={"SelectModel"} path={`/quotation`} element={<Models />} />
      <Route key={"Option"} path={`/quotation/:modelCode`} element={<Options />} />
    </Routes>
  );
};

export default Router;