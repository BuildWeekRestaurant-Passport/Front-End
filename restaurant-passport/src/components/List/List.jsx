import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { Link, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchPlaces } from '../../actions/restaurants'
import Description from '../Description/Description'

import axios from 'axios'

function List(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        api()
            .get(
                "https://build-restaurant-passport.herokuapp.com/cities/2/restaurants"
            )
            .then(res => {
                console.log(res.data.restaurants)
                setData(res.data.restaurants)
            })
            .catch(err => {
                throw (err)
            })
    }, [])




    // This is your restaurant array
    return (
        <div>
            {data.length === 0 && <h1>Loading...</h1>}
            {data.map((place, index) => (
                <div key={index}>
                    <Link to={`/places/${place.restID}`}>
                        <h2>{place.restName}</h2>
                    </Link>

                </div>
            ))}


        </div>
    )
}





export default List;