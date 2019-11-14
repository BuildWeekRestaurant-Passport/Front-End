import React, { useEffect } from 'react';
import axios from 'axios'

function List() {

    useEffect(() => {
        axios.get('https://build-restaurant-passport.herokuapp.com/cities')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                throw (err)
            })
    }, [])

    return (
        <div>
            <h1>test</h1>
        </div>
    )
}

export default List