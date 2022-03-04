import React from "react"

type ButtonProps = {
     //One Variation: When click handler doesnt need parameters and return value 
    // half of the time a click handler doesnt need any parameter and doesnt return anything
    // For such cases you can type the event as empty paranthesis
    // ===> handleClick1: ()=> void

    // 2nd Variation: When you need the click handler to passed into click handler */}
    handleClick2: (event: React.MouseEvent<HTMLButtonElement>, id: number)=> void

}

function Button(props: ButtonProps) {
  return (
     //One Variation: When click handler doesnt need parameters and return value */}
    //  half of the time a click handler doesnt need any parameter and doesnt return anything
    //  means it can make an api call in the function body but doesnt have to accept any parameter or return a value
    // For such cases you can type the event as empty paranthesis
    //====> <button onClick={props.handleClick1}>Button 1</button>

    // 2nd Variation: When you need the click handler to passed into click handler */}
    <button onClick={(event)=> props.handleClick2(event, 1)}>
        Button 2
    </button>
  )
}

export default Button