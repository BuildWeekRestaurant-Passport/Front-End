import React, { useEffect } from 'react';
import { connect } from "react-redux";

import axios from 'axios'

function List(props) {

    // useEffect(() => {
    //     axios.get('https://build-restaurant-passport.herokuapp.com/cities')
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             throw (err)
    //         })
    // }, [])
    console.log(props.places)

    return (
        <div>
            {props.places.map(place => (
                <>
                    <h1>{place.name}</h1>
                    <h2>{place.city}</h2>
                </>
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        places: state.places
    }
}

export default connect(mapStateToProps)(List)