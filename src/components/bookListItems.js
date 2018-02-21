import React from 'react';


const bookListItem = ({title, author}) =>  {

return (
  <div>
    <div>
      title: {title}
    </div>
    <div>
      author: {author}
    </div>
    <br/>
  </div>
)
}

export default bookListItem;