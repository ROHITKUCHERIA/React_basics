import React from "react";
import ReactDOM from "react-dom";

 /*                                             ************************************* ReactDom Method ***************************************

 Syntax =>  ReactDOM.render('kya dikhana hai','kha dikhana hai','callback function'); 
                jsx = javascript Extention
                        |
 ==> Method 1 :
ReactDOM.render(<h1> my name is rohit </h1>, document.getElementById('root'));
*/

/*

// ==>  Method 2 : 
// using Babel Javascript campiler
ReactDOM.render(React.createElement("h1",null,"Rohit Kucheria"),
document.getElementById("root"));


// ==>  Method 3 : 
// using Pure JavaScript
var h1 = document.createElement("h1");
h1.innerHTML = "Only Rj-13 Boys";
document.getElementById("root").appendChild(h1);
*/

/*                                                ************* Render Multiple Element inside ReactDOM.render() function ********************

Method 1 :
using only div section method 
*/

// ReactDOM.render(
//                 <div>    
                
//                 <h1> Swami </h1>
//                 <h2>Keshvanand</h2>
//                 <h3>Institute of Technology</h3>

//                 </div>,
//                 document.getElementById("root"));

                
/*  Method 2 : 
We can simply to return an array of elemnets. using ' [] ' 
*/

// ReactDOM.render(
                  
//   [
//                   <h1> Swami </h1>,
//                   <h2>Keshvanand</h2>,
//                   <h3>Institute of Technology</h3>
  
//   ],
//                   document.getElementById("root"));
  



                  
                  
//                                                      ******************************* React Fragment ********************

/* To reduce multiple div section in browser Element section. we use React Fragment  */


// ReactDOM.render(
//   <React.Fragment>    
  
//   <h1> Swami </h1>
//   <h2>Keshvanand</h2>
//   <h3>Institute of Technology</h3>

//   </React.Fragment>,
//   document.getElementById("root"));


/* or We can use */ 

// ReactDOM.render(
//   <>    
//   <h1> Swami </h1>
//   <h2>Keshvanand</h2>
//   <h3>Institute of Technology</h3>
//   </>,
//   document.getElementById("root"));


/*                                                      ***************  JavaScript Expression  *******************
 How to write  javascript Variable name Expression in html (JSX) ....
 And we only use in {} Expression . We can't use statement like  " for loop ,if else statement ".
 
 */
//  const First_name = "Rohit";
//  ReactDOM.render(<h1> My name is {First_name} Kucheria</h1>,
//                 document.getElementById('root')
//  );