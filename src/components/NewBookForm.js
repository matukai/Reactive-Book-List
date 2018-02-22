import React from 'react';


const NewBookForm = ({ inputTitle, inputAuthor, submitHandler }) => {

  // console.log(inputTitle);
  // console.log(inputAuthor)
  return (

    <div>

      <form onSubmit={submitHandler}>
        <input 
          type="text"
          placeholder="title"
          onChange={inputTitle}/>
      
          <input 
            type="text"
            placeholder="author"
            onChange={inputAuthor}/>

            <input type="submit"/>
      </form>

    </div>
    
  )

}


export default NewBookForm;