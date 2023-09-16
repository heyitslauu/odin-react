import { useState } from "react";

export const Person = () => {
    const [person, setPerson] = useState({name: "Lau", age: 24});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleIncreaseAge = () => {
        const newPerson = {...person, age: person.age + 1};
        setPerson(newPerson)
    }


    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <label>First Name</label>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <label>Last Name</label>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            {firstName && lastName && <p>{lastName}, {firstName}</p>}
            
            <button onClick={handleIncreaseAge}>Increase</button>
        </>
    )
}

export const FormSample = () => {
    const [formInput, setFormInput] = useState({})


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInput({...formInput, [name] : value});
    }
    return (
        <>
            <label>First Name:</label>
            <input 
                type="text" 
                name="firstName"
                value={formInput.firstName || ''}
                onChange={handleInputChange}
            />
            <label>Last Name:</label>
            <input 
                type="text" 
                name="lastName"
                value={formInput.lastName || ''}
                onChange={handleInputChange}
            />
            <label>Address</label>
            <input 
                type="text" 
                name="address"
                value={formInput.address || ''}
                onChange={handleInputChange}
            />
            {/* <p>{formInput.firstName, formInput.lastName}</p> */}
        </>
    )
}

// export default Person;