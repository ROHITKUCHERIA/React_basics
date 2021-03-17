import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import Greeting from './Greeting';



//Map function Syntex  ===>   // function ncard (value,index_no,array_name){}
const App = ()=> {
  return (
    <>
    <Greeting/>
      {Sdata.map((value) => {
        return (
          <Card
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            Link={value.Link}

          />
        );
      })}
    </>
  );
}
export default App;