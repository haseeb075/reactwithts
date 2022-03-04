
// When building projects using types and when building libraries using interfaces
// export interface GreetProps {
//     name: string
// }
// also we can use types
export type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {

  {/* If messagecount has been fixed so we have to tell Greet that is optional so we put ? into the prop type. also we check if props 
  of messageCount passed then show that otherwise show zero */}
  const {messageCount= 0} = props
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>
          Welcome {props.name} ! You have {messageCount} read messages
        </h1>
      ) : (
        <h1>Sorry {props.name} ! You cant access this page</h1>
      )}
    </div>
    );
}

export default Greet;
