import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Bitacora from "../pages/Bitacora";
import Perfiles from "../pages/Perfiles";
import Presentacion from "../pages/Presentacion";
import ApiPage from "../pages/ApiPage";
import Json from "../pages/Json";


const AppRoutes = () => {
  return (
  <Routes>
     <Route element={<MainLayout />}>
    <Route path="/" element={ <Home/>} />
    <Route path="/bitacora" element={ <Bitacora/>} />
    <Route path="/perfiles" element={ <Perfiles/>} />
    <Route path="/presentacion" element={ <Presentacion/>} />
    <Route path="/api-page" element={ <ApiPage/>} />
    <Route path="/json" element={ <Json/>} />
  </Route>
  </Routes>
  )
};
export default AppRoutes