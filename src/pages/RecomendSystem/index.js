// import axios from "axios";
import React from "react";
// import { useSelector } from "react-redux";
import { Button, ComboBoxLabel, Gap, HeaderPage } from "../../components";

const RecomendSystem = () => {

  return (
    <div>
      <HeaderPage title={`List of Stocks`} />
      <ComboBoxLabel title={`Sector`} />
      <Gap className={`w-full h-2 lg:h-4`} />

      <ComboBoxLabel title={`Subsector`} />
      <Gap className={`w-full h-2 lg:h-4`} />

      <ComboBoxLabel
        title={`Code of Company`}
        // dataset={selectedSectors.subsectors}
        // keyvalue={"name"}
        // selectedValue={selectedSubsectors}
        // onChange={setSelectedSubsectors}
        // disabled={false}
      />
      <Gap className={`w-full h-2 lg:h-4`} />

      <div className={`w-full flex`}>
        <Gap className={`w-1/4 mr-3`} />
        <div className={`w-full flex space-x-2`}>
          <Button
            title={`Search`}
            width={`px-3`}
            primary={true}
            onClick={() => alert("Ini adalah Search Buton!")}
          />
          <Button
            title={`Reset`}
            width={`px-2`}
            type={`reset`}
            // onClick={reset}
            onClick={() => {
              alert("tombol reset");
            }}
          />
        </div>
      </div>
      <Gap className={`h-16 w-full`} />
    </div>
  );
};

export default RecomendSystem;
