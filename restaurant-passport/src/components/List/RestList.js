import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import RestCard from '../src/components/List/RestCard';
import Header from '../src/components/List/Header';
import axios from "axios";

export default function RestList() {

const [restaurant, setRestaurant] = useState([]);

axios
    //  .get('https://rickandmortyapi.com/api/character/')
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
 