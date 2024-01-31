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
                <h2>General Information: </h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input
                        autoComplete='True'
                        id='name'
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />            
                    <label htmlFor="email">Email: </label>
                    <input
                        autoComplete='True'
                        id='email'
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />            
                    <label htmlFor="phone">Phone: </label>
                    <input
                        autoComplete='True'
                        id='phone'
                        type="tel"
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                <input type="Submit" />

                </form>

            </div>
        </>
    );
}

export default General;