import React from 'react';

const SearchForm = (props) => {
    return (
        <form>
            <input
                type='text'
                placeholder='In the mood for...'
                value={props.searchTerm}
                onChange={props.handleChange}
            />
        </form>
    );
}

export default SearchForm;