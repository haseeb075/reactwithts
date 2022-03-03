import React from "react";

// When building projects using types and when building libraries using interfaces
// export interface GreetProps {
//     name: string
// }
// also we can use types
export type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name} ! You have {props.messageCount} read messages
        </h1>
      ) : (
        <h1>Sorry {props.name} ! You cant access this page</h1>
      )}
    </div>
  );
}

export default Greet;
