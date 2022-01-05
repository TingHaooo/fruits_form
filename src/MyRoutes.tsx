import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import FruitForm from "./FruitForm";
import PickFruit from "./PickFruit";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PickFruit />} />
        <Route path="fruit" element={<Outlet />}>
          <Route path=":fruitName" element={<FruitForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;
