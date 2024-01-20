interface radioProp {
    value: string;
    name: string;
   
    setRadio: (inputValue: string) => void;
  }
  const RadioComp = (props: radioProp) => {
    const { name, value, setRadio } = props;
    return (
      <div>
        <input
          type="radio"
          name={name}
          value={value}
          id={value}
          onChange={(e) => setRadio(e.target.value)}
        />
  
        <label htmlFor={value}>{value}</label>
      </div>
    );
  };
  
  export default RadioComp;
  