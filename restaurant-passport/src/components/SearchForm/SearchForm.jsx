import React, { useState, useEffect } from 'react';

export default function SearchForm(props) {
    const [results, setResults] = useState();

    const handleChange = (event) => {
        setResults(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const filtered = props.places.filter(place => {
            return place.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
        });

        props.search(filtered);
        console.log(filtered);
    };

    return (
        <div className='search-form'>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type='text'
                    name='restaurant'
                    id='restaurant'
                    placeholder='Search by name'
                />
            </form>
        </div>
    );
}