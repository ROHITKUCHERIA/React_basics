import React, { useState } from 'react';

const App = () => {
  let time = new Date().toLocaleTimeString(); 
  /*  ** In useState mathod we use array destructuring rule. 
    In the useState method we have 3 state first one is the current state known as *** count *** and 
    second is updated values state known as **SetCount**. 
    last third is the initial value of the function or we can say tha initial value of the state. and This is known as useState. 
    usestate() give our value to the count variable and now setcount function is called and then value is changes using ** count+1 **.
  */
const [ctime,setCtime] = useState(time);
const UpdateTime = ()=> {
  let time = new Date().toLocaleTimeString(); 
  return setCtime(time);
}
// setInterval(UpdateTime,1000);
  return (
  <>
      <div className="first_div">
          <h1>{ctime}</h1>
          <button className="btn btn-outline-warning" onClick={UpdateTime} >Click Me </button>
      </div>
  </>
);
}

export default App;