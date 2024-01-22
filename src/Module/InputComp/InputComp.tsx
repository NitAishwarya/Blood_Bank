import styless from "./InputComp.module.scss";

interface inputProps {
  placeholder: string;
  inputType: string;
  inputValue: string;
  inputOnChange: (inputType: string) => void;
}
const InputComp = (props: inputProps) => {
  const { placeholder, inputOnChange, inputType, inputValue } = props;

  return (
    <div className={styless["wrap"]}>
    

      <span className={styless["span-inp"]}> {placeholder}</span>
      <br />

      <input
        className={styless["input"]}
        type={inputType}
        onChange={(e) => inputOnChange(e.target.value)}
        value={inputValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComp;
