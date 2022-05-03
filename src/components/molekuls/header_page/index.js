import React from "react";
import { Gap, Label } from "../../atoms";

const HeaderPage = ({ title }) => {
  return (
    <div>
      <div className={`border-b-2`}>
        <Gap className={`h-5 md:h-7 lg:h-9 2xl:h-11`} />
        <Label header={true} title={title ? title : `Your-header-Page`} />
      </div>
      <Gap className={`h-5 md:h-7 lg:h-9 2xl:h-11`} />
    </div>
  );
};

export default HeaderPage;
