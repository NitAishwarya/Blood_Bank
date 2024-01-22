import React from "react";
import {patientType} from '../Patient/Patient'
import TableComp from "../../Module/TableComp/TableComp";

const BankComp = (props :{
    patientData: patientType[];
    setpatientData: React.Dispatch<any>

}) =>{
    const {patientData, setpatientData} = props;

    const deleteFun = (id:any) => {
        const newpatientData:patientType[] =  patientData.filter((Patient) => {
           if(Patient.id != id){
             return Patient
           }
         
         });
         setpatientData(newpatientData);
       }
    return(
        <div>
            <TableComp tableData={patientData} deleteFun={deleteFun}/>
        </div>
    );
}

export default BankComp;