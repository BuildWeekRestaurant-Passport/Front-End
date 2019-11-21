import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { Link, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchPlaces } from '../../actions/restaurants'
import Description from '../Description/Description'
import SearchForm from '../SearchForm/SearchForm';
import axios from 'axios'

function List(props) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        api()
            .get(
                "/cities/2/restaurants"
            )
            .then(res => {
                console.log(res.data.restaurants);
                setRestaurants(res.data.restaurants)
            })
            .catch(err => {
                throw (err)
            })
    }, []);

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        // console.log(searchTerm);
    };

    const filteredRestaurants = restaurants.filter(restaurant => {
        return restaurant.restDesc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
    // console.log(filteredRestaurants);


    // This is your restaurant array
    return (
        <div>
            <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
            <section className='filtered-list'>
                {filteredRestaurants.map((restaurant, i) => {
                    return (
                        <div key={i}>
                            <Link to={`/places/${restaurant.restID}`}>
                                <h2>{restaurant.restName}</h2>
                            </Link>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default List;