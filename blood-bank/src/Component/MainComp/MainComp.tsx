import { useState } from "react";
import Patient, {patientType} from "../Patient/Patient";
import BankComp from "../BankComp/BankComp";

const MainComp = () =>{
    const [patientData,setpatientData] = useState<patientType[]>([]);
    return(
        <div >
          
          <div style={{margin: "15px 396px"}}>
          <Patient  patientData={patientData} setpatientData={setpatientData}/>
          </div>
           <br />
            <div style={{margin: "15px 100px"}}>
                <span> Donar's Data  </span>
             <BankComp patientData={patientData} setpatientData={setpatientData}/>
        </div>
        </div>

       
    );
}

export default MainComp;