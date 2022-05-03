import React from "react";
import { Label } from "../../atoms";
import { CbAutocomplete } from "../../molekuls";

const ComboBoxLabel = ({
  title,
  dataset,
  keyvalue,
  selectedValue,
  disabled,
  ...rest
}) => {
  return (
    <div className={`w-full flex justify-center items-center`}>
      <div className={`w-1/4 mr-3`}>
        <Label title={title ? title : `your-label`} />
      </div>
      <div className={`w-full relative`}>
        <CbAutocomplete
          dataset={dataset ? dataset : null}
          keyValue={keyvalue ? keyvalue : null}
          selectedValue={selectedValue ? selectedValue : null}
          disabled={disabled ? disabled : false}
          {...rest}
          //   onChange={setSelectedSectors}
        />
      </div>
    </div>
  );
};

export default ComboBoxLabel;
