import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ComboBoxLabel,
  Gap,
  HeaderPage,
  Input,
  Pagination,
  Table,
  TextDinamis,
} from "../../components";
import { setResetAllDetail } from "../../config/redux/actions";
import {
  setDataTableWithParams,
  setResetDataTable,
} from "../../config/redux/actions/home_action";

const StockForecast = () => {
  const dispatch = useDispatch();
  const { allStocks, allIndex, allSectors } = useSelector(
    (state) => state.globalReducer
  );
  const { dataTableWithParams } = useSelector((state) => state.homeReducer);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [selectedStock, setSelectedStock] = useState("");

  const totalAllstocks = allStocks ? allStocks.total_data : 1;

  const [parameters, setParameters] = useState(null);

  const [thisPage, setThisPage] = useState(1);
  const perPage = 100;
  const totalPage = Math.ceil(totalAllstocks / perPage);
  const listPage = parameters ? [1] : numberRange(totalPage);

  function numberRange(end) {
    return new Array(end).fill().map((d, i) => i + 1);
  }

  useEffect(() => {
    dispatch(setDataTableWithParams(parameters, thisPage, perPage));
    dispatch(setResetAllDetail());
  }, [dispatch, thisPage, parameters]);

  const reset = () => {
    if (selectedIndex || selectedSector || selectedStock) {
      dispatch(setResetDataTable());
      setParameters(null);
      setSelectedIndex(null);
      setSelectedSector(null);
      setSelectedStock("");
      setThisPage(1);
    } else {
      dispatch(setDataTableWithParams(parameters, thisPage, perPage));
    }
  };

  const searchHandler = () => {
    if (selectedIndex || selectedSector || selectedStock) {
      dispatch(setResetDataTable());
      setThisPage(1);
    }

    selectedIndex || selectedSector || selectedStock
      ? setParameters({
          index_id: selectedIndex ? selectedIndex.Id : null,
          sector_id: selectedSector ? selectedSector.id : null,
          stock_code: selectedStock ? selectedStock : null,
        })
      : setParameters(null);
  };

  return (
    <div>
      <HeaderPage title={`List of Stocks`} />
      <ComboBoxLabel
        title={`Index`}
        dataset={allIndex ? allIndex.data : null}
        keyvalue={"Name"}
        selectedValue={selectedIndex}
        onChange={setSelectedIndex}
        disabled={allIndex ? false : true}
      />
      <Gap className={`w-full h-2 lg:h-4`} />

      <ComboBoxLabel
        title={`Sector`}
        dataset={allSectors ? allSectors.data : null}
        keyvalue={`name`}
        selectedValue={selectedSector}
        onChange={setSelectedSector}
        disabled={allSectors ? false : true}
      />
      <Gap className={`w-full h-2 lg:h-4`} />
      <Input
        title={`Code of Company`}
        onChange={(e) => {
          setSelectedStock(e.target.value);
        }}
        value={selectedStock}
      />
      <Gap className={`w-full h-2 lg:h-4`} />

      <div className={`w-full flex`}>
        <Gap className={`w-1/4 mr-3`} />
        <div className={`w-full flex space-x-2`}>
          <Button
            primary={true}
            onClick={searchHandler}
            width={`px-3`}
            title={`Search`}
          />
          <Button
            title={`Reset`}
            width={`px-2`}
            onClick={reset}
            type={`reset`}
          />
        </div>
      </div>
      <Gap className={`h-16 w-full`} />

      <div>
        <div className={`flex space-x-2 md:hidden`}>
          <TextDinamis
            title={`Page:`}
            semibold={true}
            textColor={"text-green-500"}
          />
          <TextDinamis title={thisPage} />
        </div>
        <Gap className={`h-1`} />
        <Table
          datas={dataTableWithParams.data}
          onClickLink={() => {
          }}
        />
        <Gap className={`h-3 lg:h-5 w-full bg-white`} />
        <Pagination
          currentPage={thisPage}
          allPageList={listPage}
          onClickPrev={() => {
            dispatch(setResetDataTable());
            thisPage !== 1 ? setThisPage(thisPage - 1) : setThisPage(thisPage);
            // setListStock();
          }}
          onClickPage={(e) => {
            const num = parseInt(e.target.firstChild.data);
            if (thisPage !== num) {
              dispatch(setResetDataTable());
            }
            setThisPage(num);
            // setListStock();
          }}
          onClickNext={() => {
            dispatch(setResetDataTable());
            thisPage < listPage.length
              ? setThisPage(thisPage + 1)
              : setThisPage(thisPage);

            // setListStock();
          }}
        />
      </div>
    </div>
  );
};

export default StockForecast;
