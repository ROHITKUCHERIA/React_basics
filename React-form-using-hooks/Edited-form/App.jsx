import React, { useState } from 'react';

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const InputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);


    const { name, value } = event.target;

    setFullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]:value,
      };


      // if (name === "fName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("form Submitted ");
  };


  return (
    <>
      <div>
        <form onSubmit={onsubmit}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p> {fullName.email} </p>
            <p> {fullName.phone} </p>
            <input
              type="text"
              placeholder="Enter Your Name "
              name="fname"
              onChange={InputEvent}
              value={fullName.fname}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Last Name "
              name="lname"
              onChange={InputEvent}
              value={fullName.lname}
              autoComplete="off"
            />
            <br/>
            <input
              type="text"
              placeholder="Enter Your Email "
              name="email"
              onChange={InputEvent}
              value={fullName.email}
              autoComplete="off"
            />
            <br />
            <input
              type="text"
              placeholder="Enter Your Phone-No "
              name="phone"
              onChange={InputEvent}
              value={fullName.phone}
              autoComplete="off"
            />
            <button onClick={onSubmit}> Click - Me 😄 </button>
          </div>
        </form>

      </div>
    </>
  );
}

export default App;