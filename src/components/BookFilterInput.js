import React from 'react';

const BookFilterInput = ({userInput}) => {

  console.log(userInput)
  return (
    <div>

      <input 
        type="text"
        placeholder="search"
        onChange={userInput}/>
      <br/>
      <br/>

    </div>
  )
}

export default BookFilterInput;