import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { Link, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchPlaces } from '../../actions/restaurants'
import Description from '../Description/Description'

import axios from 'axios'

function List({ data }) {
    console.log(data)





    // This is your restaurant array
    return (
        <div>
            {data.length === 0 && <h1>Loading...</h1>}
            {data.map((place, index) => (
                <>
                    <Link to={`/places/${place.restID}`}>
                        <h2>{place.restName}</h2>
                    </Link>

                </>
            ))}


        </div>
    )
}





export default List;