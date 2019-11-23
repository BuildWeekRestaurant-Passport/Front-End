import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    return (
        <form>
            <input
                type='text'
                placeholder='In the mood for...'
                value={props.searchTerm}
                onChange={props.handleChange}
                className='search'
            />
        </form>
    );
}

export default SearchForm;