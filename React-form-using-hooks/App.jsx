import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("");

  const [fullName ,setFullName] = useState("");

  const [lastName,setLastName] = useState("");

  const [lastNamenew,setLastNameNew] = useState("");

  

  const InputEvent = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const InputEventTwo = (event)=>{
    setLastName(event.target.value);
  };

  const onSubmit=(event)=>{
    setFullName(name);
    setLastNameNew(lastName);
  };

  
  return (
    <>
      <div>
        <h1> Hello {fullName} {lastNamenew}👍</h1>
        <input type="text"
          placeholder="Enter Your Name "
          onChange={InputEvent}
          value={name}
        />
        <br />
        <input type="text"
          placeholder="Enter Your Last Name "
          onChange={InputEventTwo}
          value={lastName}
        />
        <button onClick={onSubmit}> Click - Me 😄 </button>
      </div>
    </>
  );
}

export default App;