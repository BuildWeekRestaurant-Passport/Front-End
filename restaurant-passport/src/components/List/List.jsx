import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { Link, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchPlaces } from '../../actions/restaurants'
import Description from '../Description/Description'
import SearchForm from '../SearchForm/SearchForm';

import axios from 'axios'

function List(props) {
    // const [data, setData] = useState([])
    const [restaurants, setRestaurants] = useState([]);
    const [filteredData, updateFilteredData] = useState([]);
    const search = restArr => {
        updateFilteredData(restArr);
    };

    useEffect(() => {
        api()
            .get(
                "/cities/2/restaurants"
            )
            .then(res => {
                console.log(res.data.restaurants)
                // setData(res.data.restaurants)
                setRestaurants(res.data.restaurants);
                updateFilteredData(res.data.restaurants);
            })
            .catch(err => {
                throw (err)
            })
    }, [])




    // This is your restaurant array
    return (
        // <div>
        //     {data.length === 0 && <h1>Loading...</h1>}
        //     {data.map((place, index) => (
        //         <div key={index}>
        //             <Link to={`/places/${place.restID}`}>
        //                 <h2>{place.restName}</h2>
        //             </Link>

        //         </div>
        //     ))}
        // </div>

        <div className='restaurant-list'>
            <h2>My Restaurants</h2>
            <SearchForm search={search} restaurants={restaurants} />
            {filteredData.map((place, index) => {
                return <Description key={index} restaurant={place} />;
            })}
        </div>
    )
}





export default List;