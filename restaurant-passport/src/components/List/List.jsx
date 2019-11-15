import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { connect } from "react-redux";
import { fetchPlaces } from '../../actions/restaurants'

import axios from 'axios'

function List(props) {

    // Calling the api to have access to the array of places
    useEffect(() => {
        props.fetchPlaces()
    }, [])

    // This is your restaurant array
    console.log(props.places)
    return (
        <div>
            {props.places.length === 1 && <h1>Loading...</h1>}
            {props.places.map(place => (
                <>
                    <h2>{place.restName}</h2>
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

const mapDispatchToProps = {
    fetchPlaces
}



export default connect(mapStateToProps, mapDispatchToProps)(List)