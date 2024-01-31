import { useState } from 'react'

function General(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <>
            <div className="section" id="general">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Name:</label>
                    <input
                        id='name'
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />            
                    <label htmlFor="email">Email:</label>
                    <input
                        id='email'
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />            
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id='phone'
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </form>
            </div>
        </>
    );
}

export default General;