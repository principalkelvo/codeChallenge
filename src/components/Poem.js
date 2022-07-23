import React, { useState, useEffect } from "react";

function Poem({poems}) {
  const [read, setRead] = useState(true);

  

  function handleRead(){
    setRead((read)=> !read)
    console.log("handleRead: ");
  }

  console.log(poems);
  const eachPoem = poems.map((poem) => (
    <div key={poem.id}>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>- {poem.author}</strong>
      </p>
      <button onClick={handleRead}>{read ? 'Mark as read' : 'Mark as unread'}</button>
    </div>
  ));
  // console.log(eachPoem);
  return <div>{eachPoem}</div>

  // <div>
  //   <h3>{eachPoem.title}</h3>
  //   <p>Content</p>
  //   <p>
  //     <strong>- By Author</strong>
  //   </p>
  //   <button>Mark as read</button>
  // </div>
}

export default Poem;
