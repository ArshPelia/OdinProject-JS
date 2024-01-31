import { useState } from 'react'

function Education(){
    const [school, setSchool] = useState('');
    const [program, setProgram] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="container" id="education">
                <h2>Education: </h2>
                <h4>School: 
                    {school}
                </h4>
                <h4>Program: 
                    {program}

                </h4>


                {/* <form onSubmit={handleSubmit}>
                    <label htmlFor="school">School: </label>
                    <input
                        autoComplete='True'
                        id='school'
                        type="text"
                        value={school}
                        onChange={(event) => setSchool(event.target.value)}
                    />            
                    <label htmlFor="program">program: </label>
                    <input
                        autoComplete='True'
                        id='program'
                        type="text"
                        value={program}
                        onChange={(event) => setProgram(event.target.value)}
                    />            
                <input type="Submit" />
                </form> */}

            </div>
        </>
    );
}

export default Education;