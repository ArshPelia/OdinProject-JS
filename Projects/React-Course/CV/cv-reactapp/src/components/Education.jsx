import React, { useState } from 'react';

function Education() {
  const [school, setSchool] = useState('');
  const [program, setProgram] = useState('');
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform additional actions upon form submission if needed
    // For now, let's keep it empty
    toggleEdit();

  };

  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  return (
    <>
      <div className="container" id="education">
        <h2>Education: </h2>
        {edit ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="school">School: </label>
            <input
              autoComplete="True"
              id="school"
              type="text"
              value={school}
              onChange={(event) => setSchool(event.target.value)}
            />
            <label htmlFor="program">Program: </label>
            <input
              autoComplete="True"
              id="program"
              type="text"
              value={program}
              onChange={(event) => setProgram(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <>
            <h4>School: {school}</h4>
            <h4>Program: {program}</h4>
            <button className="edit-toggle" type="button" onClick={toggleEdit}>
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Education;
