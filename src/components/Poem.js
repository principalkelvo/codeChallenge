import React, { useState } from "react";


function Poem({poems}) {
  const [read, setRead] = useState(true);

  const handleRead = (id) => () => {
    setRead((read) => ({
      ...read,
      [id]: !read[id],
    }));

    console.log("thePoem");
  };

  console.log(poems);
  const eachPoem = poems.map((poem) => (
    <div key={poem.id}>
      <h3>{poem.title}</h3>
      <p>{poem.content}</p>
      <p>
        <strong>-By {poem.author}</strong>
      </p>
      <button onClick={handleRead(poem.id)}>
        {read[poem.id] ? "Mark as unread" : "Mark as read"}
      </button>
    </div>
  ));
  console.log(eachPoem);
  return(
   <div>{eachPoem}</div>

  // <div>
  //   <h3>title</h3>
  //   <p>Content</p>
  //   <p>
  //     <strong>- By Author</strong>
  //   </p>
  //   <button>Mark as read</button>
  // </div>
  )
}

export default Poem;
