// run both servers first 
import React, { useEffect, useState } from 'react';

import './Peoplelist.css';

function Peoplelist() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/peopledata')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleDeleteClick = (id) => {
        const updatedPeople = people.filter(person => person.id !== id);
        setPeople(updatedPeople);
        console.log(`Person with id ${id} deleted!`);
    };

    return (
        <div className='list'>
            <h2>Fee paid List</h2>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        <p>Name: {person.first_name} {person.last_name}</p>
                        <p>Email: {person.email}</p>
                        <p>Gender: {person.gender}</p>
                        <p>Fees: {person.fee_balance}</p>
                        <button className="button" onClick={() => handleDeleteClick(person.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Peoplelist;
