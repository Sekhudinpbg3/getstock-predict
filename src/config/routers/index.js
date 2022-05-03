import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  DetailStock,
  Home,
  MainApp,
  RecomendSystem,
  StockForecast,
} from "../../pages";
import {
  setAllIndex,
  setAllSectors,
  setAllStocks,
} from "../redux/actions/global_action";
import { setDataTableWithParams } from "../redux/actions/home_action";

const Routers = () => {
  const dispatch = useDispatch();
  // setGlobalState
  useEffect(() => {
    dispatch(setAllStocks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setAllIndex());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setAllSectors());
  }, [dispatch]);

  // get defaultdatatable
  useEffect(() => {
    dispatch(setDataTableWithParams());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path={`main`} element={<MainApp />}>
          <Route path={"recsys"} element={<RecomendSystem />} />
          <Route path={`stock`} element={<StockForecast />} />
          <Route path={`stock/detail/:code`} element={<DetailStock />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
