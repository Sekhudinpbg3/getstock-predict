import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Gap, HeaderPage, Label } from "../../components";

const DetailStock = () => {
  const history= useNavigate()
  const codeStock = useParams();
  console.log("KODE SAHAM", codeStock);
  return (
    <div>
      <HeaderPage title={`Detail : ${codeStock.code}`} />

      <div>
      <Label labelBold={true} />
      </div>

      <Gap className={`h-10`}/>
      <Button 
        title={`back`}
        width={`px-1`}
        height={`py-0.5`}
        onClick={()=>history(`../stock`)}
      />
    </div>
  );
};

export default DetailStock;
