import { useReducer, useState } from "react";
import InputComp from "../../Module/InputComp/InputComp";
import stylees from "./Patient.module.scss";
import RadioComp from "../../Module/RadioComp/RadioComp";
import { Value } from "sass";
import DropDown from "../../Module/DropdownComp/DropDownComp";
import ButtonComp from "../../Module/ButtonComp/ButtonComp";

export interface patientType {
  id: string;
  donarName: string;
  DOB: string;
  gender: string;
  email: string;
  phone: string;
  Add: string;
  occup: string;
  BloodType: string;
  DonateEver: string;
  AnyDiseases: string;
  Anyallergies: string;
}

const initialState = {
  id: "000",
  donarName: "",
  DOB: "0",
  gender: " ",
  email: "",
  phone: " ",
  Add: "",
  occup: "",
  BloodType: "",
  DonateEver: "",
  AnyDiseases: "",
  Anyallergies: "",
};

const reducerFun = (state: patientType, action: any) => {
  switch (action.type) {
    case "setDonarName":
      return { ...state, donarName: action.payload.donarName };

    case "setDOB":
      return { ...state, DOB: action.payload.DOB };

    case "setGender":
      return { ...state, gender: action.payload.gender };

    case "setemail":
      return { ...state, email: action.payload.email };

    case "setPhone":
      return { ...state, phone: action.payload.phone };

    case "setAdd":
      return { ...state, Add: action.payload.Add };

    case "setOccup":
      return { ...state, occup: action.payload.occup };

    case "setBloodType":
      return { ...state, BloodType: action.payload.BloodType };

    case "setDonateEver":
      return { ...state, DonateEver: action.payload.DonateEver };

    case "setAnyDiseases":
      return { ...state, AnyDiseases: action.payload.AnyDiseases };

    case "setAnyallergies":
      return { ...state, Anyallergies: action.payload.Anyallergies };

    default:
      return { ...state };
  }
 
};

const Patient = (props: {
  patientData: patientType[];
  setpatientData: React.Dispatch<any>;
}) => {
  const { patientData, setpatientData } = props;

  const genderArr = ["Male", "Female", "TransGender", "Other"];

  const BloodGroupArr = ["A+", "O+", "B+", "AB+", "A-", "O-", "B-", "AB-"];

  const opt = ["Yes", "No"];

  const [state, dispatch] = useReducer<(state: any, action: any) => any>(
    reducerFun,
    initialState
  );

  const submitForm = () => {
    const id = `${state.DonarName}-${Math.random() * 1000}-${
      Math.random() * 1000
    }`;
    state.id = id;
    setpatientData([...patientData, state]);
  };

  const ResetFun = () => {
    const [oldValue , setnewValue] = useState("");

    setnewValue(oldValue);
  };

  const changeValue = (inputValue: string) => {
    dispatch({ type: "setDonarName", payload: { donarName: inputValue } });
  };

  const changeValue2 = (inputValue: string) => {
    dispatch({ type: "setDOB", payload: { DOB: inputValue } });
  };

  const changeValue3 = (inputValue: string) => {
    dispatch({ type: "setemail", payload: { email: inputValue } });
  };

  const changeValue4 = (inputValue: string) => {
    dispatch({ type: "setPhone", payload: { phone: inputValue } });
  };

  const changeValue5 = (inputValue: string) => {
    dispatch({ type: "setAdd", payload: { Add: inputValue } });
  };

  const changeValue6 = (inputValue: string) => {
    dispatch({ type: "setOccup", payload: { occup: inputValue } });
  };



  return (
    <div className={stylees["wrap"]}>
      <span className={stylees["heading"]}> Blood Donation Form </span>
      <hr />
      <div>
        <span className={stylees["heading2"]}> Blood Donor Information </span>
      </div>
      <br />
      <div>
        <InputComp
          placeholder="Donar's Name"
          inputType="text"
          inputValue={state.donarName}
          inputOnChange={changeValue}
        />
        <br />
        <InputComp
          placeholder="Date of Birth"
          inputType="date"
          inputValue={state.DOB}
          inputOnChange={changeValue2}
        />
        <br />
       
        Gender:
        {genderArr.map((value) => {
          return (
            <RadioComp
              name="gender"
              value={value}
              setRadio={(inputValue: string) =>
                dispatch({ type: "setGender", payload: { gender: inputValue } })
              }
            />
          );
        })}
        <br />
       <InputComp
          placeholder="Email"
          inputType="text"
          inputValue={state.email}
          inputOnChange={changeValue3}
        />
        
       

       <br />
        <InputComp
          placeholder="Phone"
          inputType="text"
          inputValue={state.phone}
          inputOnChange={changeValue4}
        />
        <br />
        <InputComp
          placeholder="Home Address"
          inputType="text"
          inputValue={state.Add}
          inputOnChange={changeValue5}
        />
        <br />
        <InputComp
          placeholder="Occupation"
          inputType="text"
          inputValue={state.occup}
          inputOnChange={changeValue6}
        />
      
        <br />
        Blood Type :
        {BloodGroupArr.map((value) => {
          return (
            <DropDown
              name="BloodType"
              value={value}
              setCheck={(inputValue: string) =>
                dispatch({
                  type: "setBloodType",
                  payload: { BloodType: inputValue },
                })
              }
            />
          );
        })}
        <br />
        Did you ever donate blood before?
        {opt.map((value) => {
          return (
            <RadioComp
              name="DonateEver"
              value={value}
              setRadio={(inputValue: string) =>
                dispatch({
                  type: "setDonateEver",
                  payload: { DonateEver: inputValue },
                })
              }
            />
          );
        })}
        <hr />
        <span style={{ color: "purple" }}> Health Security Check </span>
        <br />
        <br />
        Did you suffer of any Diseases?
        {opt.map((value) => {
          return (
            <RadioComp
              name="AnyDiseases"
              value={value}
              setRadio={(inputValue: string) =>
                dispatch({
                  type: "setAnyDiseases",
                  payload: { AnyDiseases: inputValue },
                })
              }
            />
          );
        })}
        <br />
        Did you have any allergies?
        {opt.map((value) => {
          return (
            <RadioComp
              name="Anyallergies"
              value={value}
              setRadio={(inputValue: string) =>
                dispatch({
                  type: "setAnyallergies",
                  payload: { Anyallergies: inputValue },
                })
              }
            />
          );
        })}
     
      <br />
       </div>
      <div style={{ textAlign: "center" }}>
        <button className={stylees["button"]} onClick={submitForm}>
          {" "}
          Submit{" "}
        </button>
      
      
      </div>
    </div>
  );
};


export default Patient;
