import React, { useState } from 'react';

function General() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`);
    toggleEdit();
  };

  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  return (
    <>
      <div className="container" id="general">
        <h2>General Information</h2>
        {edit ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              autoComplete="True"
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email: </label>
            <input
              autoComplete="True"
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="phone">Phone: </label>
            <input
              autoComplete="True"
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <>
            <h4>
              Name:
              {name}
            </h4>
            <h4>
              Email:
              {email}
            </h4>
            <h4>
              Phone:
              {phone}
            </h4>
            <button className="edit-toggle" type="button" onClick={toggleEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default General;
