import React, { useState, useEffect } from 'react'
import api from '../../utils/api'

function Description(props) {
    const [place, setPlace] = useState();

    useEffect(() => {
        const id = props.match.params.id;

        api().get(`/cities/restaurants/${id}`)
            .then(res => {
                console.log(res.data)
                setPlace(res.data)
            })
            .catch(err => {
                throw (err)
            })
    }, [])

    if (!place) {
        return <div>Loading restaurant information...</div>
    }

    return (
        <div>
            <h1>{place.name}</h1>
            <h2>{place.address}</h2>
            <p>{place.description}</p>
        </div>
    )
}

export default Description