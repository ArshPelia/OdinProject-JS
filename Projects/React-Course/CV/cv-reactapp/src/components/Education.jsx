import { useState } from 'react'

function Education(){
    const [school, setSchool] = useState('');
    const [study, setStudy] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <div className="section" id="general">
                <h2>Education: </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="school">School: </label>
                    <input
                        autoComplete='True'
                        id='school'
                        type="text"
                        value={school}
                        onChange={(event) => setSchool(event.target.value)}
                    />            
                    <label htmlFor="study">Study: </label>
                    <input
                        autoComplete='True'
                        id='study'
                        type="text"
                        value={study}
                        onChange={(event) => setStudy(event.target.value)}
                    />            
                </form>
                <input type="Submit" />

            </div>
        </>
    );
}

export default Education;