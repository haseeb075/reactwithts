import React from "react";
type InputProps ={
    value: string;
    handleChange : (event: React.ChangeEvent<HTMLInputElement> )=> void
}

function input(props : InputProps) {
  // Can destructure props as well
  const {value, handleChange} = props;
  // pass handlechangevent as a prop or Its good to define handler within the component as well 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(handleInputChange);
    
  } 

  return (
    <div>
      <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  );
}

export default input;
