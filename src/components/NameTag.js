
//FUNCTIONAL COMPONENT


import React from 'react';

// export default ({props}) => {
//   const name = props.name;
//   return (
//     <h3>{name}</h3>
//   );
// };

//DESTRUCTURED VERSION
export default ({name}) => {

  //do work here
  name = name.toUpperCase();


  return (
    //JSX
    <h3>{name}</h3>
  );
};
