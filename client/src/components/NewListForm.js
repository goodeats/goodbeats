import React from 'react';

const NewListForm = ({ onNewList = f => f}) => {

  let title, description;

  const submit = e => {
    e.preventDefault();
    onNewList(title.value, description.value)
    title.value = ''
    title.description = ''
    title.focus()
  }

  return (
    <form onSubmit={submit}>
      <input
        ref={input => title = input}
        type="text"
        placeholder="Title..." required />
      <input
        ref={input => description = input}
        type="text"
        placeholder="Description..." required />
      <button>Add List</button>
    </form>
  )
}

export default NewListForm;
