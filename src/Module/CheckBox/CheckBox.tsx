interface dropProp {
    name: string;
    value: string;
    setCheck: (inputValue: string) => void
  }
  
  const CheckBox = (props: dropProp) => {
    const { value,name, setCheck,  } = props;
    return (
      <div>
      <input 
        type="checkbox" 
        name={name} 
        id={value} 
        value={value}
        onChange={(e) => setCheck(e.target.value)}
          
        />
      <label htmlFor={value}>{value}</label>
    </div>
    );
  };
  
  
  export default CheckBox;