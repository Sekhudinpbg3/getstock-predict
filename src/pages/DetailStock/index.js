import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Button, Gap, NavigateDetail } from "../../components";
import {
  setDetailBalanceSheet,
  setDetailCashflow,
  setDetailEarnings,
  setDetailHistory,
  setDetailInfo,
} from "../../config/redux/actions";

const DetailStock = () => {
  const dispatch = useDispatch();

  const history = useNavigate();
  const param = useParams();
  const code = param.code;

  // useEffect to get Data from API
  useEffect(() => {
    dispatch(setDetailInfo(code));
  }, [dispatch, code]);

  useEffect(() => {
    dispatch(setDetailHistory(code));
  }, [dispatch, code]);

  useEffect(() => {
    dispatch(setDetailEarnings(code));
  }, [dispatch, code]);

  useEffect(() => {
    dispatch(setDetailCashflow(code));
  }, [dispatch, code]);

  useEffect(() => {
    dispatch(setDetailBalanceSheet(code));
  }, [dispatch, code]);

  return (
    <div>
      <NavigateDetail
        title={`Detail : ${code}`}
        linkInfo={`info/${code}`}
        linkHistory={`history/${code}`}
        linkFinancials={`financials/${code}`}
        code={code}
      />
      <Gap className={`h-4`} />
      <div>
        <Outlet />
      </div>

      <Gap className={`h-10`} />
      <Button
        title={`back`}
        width={`px-1`}
        height={`py-0.5`}
        onClick={() => history(`../stock`)}
      />
    </div>
  );
};

export default DetailStock;
