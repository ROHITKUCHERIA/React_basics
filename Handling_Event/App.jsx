import React, { useState } from 'react';

const App = () => {
  const purple="#8e44ad";
  const[bg,setBg] = useState(purple);
  const[name,setName] =useState("Click-Me");
  
  const byChange =()=>{
    // console.log("clicked");
    setBg("#34495e");
    setName("Rj-13 Boys 🥰 ✌️")
  };

  const bgback= ()=>{
    setBg(purple)
    setName("What's Wrong With u 😠")
  };

  return (
    <>
      <div style= {{backgroundColor:bg}}>
        <button onMouseEnter={byChange} onMouseLeave={bgback}>
        {name}
        </button>
      </div>
    </>
  );
}

export default App;