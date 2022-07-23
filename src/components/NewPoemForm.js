import React, { useState } from "react";

function NewPoemForm({ onAddPoem }) {
  const [newPoems, setPoemForm] = useState({
    title: "",
    content: "",
    author: "",
  });
  function handleNewPoems(event) {
    setPoemForm({
      ...newPoems,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(newPoems);
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newPoems.title,
        content: newPoems.content,
        author: newPoems.author,
      }),
    })
      .then((r) => r.json())
      .then((newPoem) => onAddPoem(newPoem));
    const submittedFormData = {
      title: "",
      content: "",
      author: "",
    };
    setPoemForm(submittedFormData);
    console.log("submitted poem", newPoems);
    console.log("cleared newPoems", submittedFormData);

    console.log("submited");
  }
  return (
    <form className="new-poem-form" onSubmit={handleSubmit}>
      <input
        value={newPoems.title}
        onChange={handleNewPoems}
        name="title"
        placeholder="Title"
      />
      <input
        value={newPoems.author}
        onChange={handleNewPoems}
        name="author"
        placeholder="Author"
      />
      <textarea
        value={newPoems.content}
        onChange={handleNewPoems}
        name="content"
        placeholder="Write your masterpiece here..."
        rows={10}
      />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
