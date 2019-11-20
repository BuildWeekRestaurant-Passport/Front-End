import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import RestCard from '../src/components/List/RestCard';
import Header from '../src/components/List/Header';
import axios from "axios";
import api from '../../utils/api';

export default function RestList() {

const [restaurant, setRestaurant] = useState([]);

axios
     .get("https://build-restaurant-passport1.herokuapp.com/cities/2/restaurants")
     .then((response) => {
       setRestaurant(response.data.results);
 console.log(response);

     })
     .catch(error => {
       console.error('Server Error', error);
     });
 } [];

   return (
    //  <section className="restaurant-list">
    //     <Link to= "/"><button>Home</button></Link>
    //     <Link to="/Search"><button>Search
    //        </button></Link>
        <section className="restaurant-list">

       {restaurant.map(ind => (
             <RestCard  key={ind.id} name={ind.name}
             description={ind.description} location={ind.location}
             address={ind.address} />

       ))}
     </section>

   );
 