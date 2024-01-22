import { useState } from "react";
import Patient, {patientType} from "../Patient/Patient";
import BankComp from "../BankComp/BankComp";
import stylees from './MainComp.module.scss'

const MainComp = () =>{
    const [patientData,setpatientData] = useState<patientType[]>([]);
    return(
        <div >
          
          <div style={{margin: "15px 396px"}}>
          <Patient  patientData={patientData} setpatientData={setpatientData}/>
          </div>
           <br />
            <div style={{margin: "15px 47px"}}>
                <span className={stylees["head"]}> Donar's Data:-  </span>
                <br /><br />
             <BankComp patientData={patientData} setpatientData={setpatientData}/>
        </div>
        </div>

       
    );
}

export default MainComp;