import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, HeaderPage } from "../../components";

const DetailStock = () => {
  const history= useNavigate()
  const codeStock = useParams();
  console.log("KODE SAHAM", codeStock);
  return (
    <div>
      <HeaderPage title={`Detail : ${codeStock.code}`} />
      <Button 
        title={`Back`}
        width={`px-1`}
        height={`py-0.5`}
        onClick={()=>history(`../stock`)}
      />
    </div>
  );
};

export default DetailStock;
