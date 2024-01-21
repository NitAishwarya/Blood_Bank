import { useReducer, useState } from "react";
import InputComp from "../../Module/InputComp/InputComp";
import stylees from "./Patient.module.scss";
import RadioComp from "../../Module/RadioComp/RadioComp";
import { Value } from "sass";
import DropDown from "../../Module/DropdownComp/DropDownComp";
import CheckBox from "../../Module/CheckBox/CheckBox";

export interface patientType {
  id: string;
  donarName: string;
  DOB: string;
  gender: string;
  email: string;
  phone: number;
  Add: string;
  occup: string;
  BloodType: string;
  DonateEver: string;
  AnyDiseases: string;
  Anyallergies: string;
  positive:string;
  condition:string;
}

const initialState = {
  id: "000",
  donarName: "",
  DOB: "0",
  gender: " ",
  email: "",
  phone: 0,
  Add: "",
  occup: "",
  BloodType: "",
  DonateEver: "",
  AnyDiseases: "",
  Anyallergies: "",
  positive:"",
  condition:""
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

      case "setPositive":
        return { ...state, positive: action.payload.positive };


      case "setCondition":
        return { ...state, condition: action.payload.condition };

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

  const condition = ["I have read the requirements. I am eligible to donate blood"];

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

    alert('do you want to submit form');
  };

  const ResetFun = () => {
    const [oldValue, setnewValue] = useState("");

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
          inputType="email"
          inputValue={state.email}
          inputOnChange={changeValue3}
        />
        <br />
        <InputComp
          placeholder="Phone"
          inputType="number"
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

        Have you ever had positive Blood test for HbsAg, Hcv, HIV?
        {opt.map((value) => {
          return (
            <RadioComp
              name="HIVPositive"
              value={value}
              setRadio={(inputValue: string) =>
                dispatch({
                  type: "setPositive",
                  payload: { positive: inputValue },
                })
              }
            />
          );
        })}


        <hr />
        <div>
          <span style={{ color: "blue" }}> Consent & Signature </span>
        </div>
        <br />
        <span className={stylees["sec"]}>
          {" "}
          I want to donate blood voluntarily and will not be entitled to claim
          any exchange for my donation. I guarantee that all the provided
          information is true. I understand the questions, which are for my
          protection as well as to protect the receipient of my blood.{" "}
        
<br />
<br />
        {condition.map((value) => {
          return (
            <CheckBox
              name="condition"
              value={value}
              setCheck={(inputValue: string) =>
                dispatch({ type: "setCondition", payload: { condition: inputValue } })
              }
            />
          );
        })}

</span>

      </div>
      <div style={{ textAlign: "center" }}>
        <button  className={stylees["button"]} onClick={submitForm}> 
          {" "}
          Submit{" "}

          
        </button>
      </div>
    </div>
  );
};

export default Patient;
