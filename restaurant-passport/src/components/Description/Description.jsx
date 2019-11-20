import React, { useState, useEffect } from 'react'
import api from '../../utils/api'
import styled from "styled-components"

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

    const Card = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: #f0e5e5;
     margin: 5% 20%
     border: solid 4px black;
     border-radius: 8px;
     font-weight: 600;
     font-size: 18px;
     box-shadow: 7px 7px 5px; #2F4F4F;
      -moz-box-shadow: 7px 7px 5px #2F4F4F;
      -webkit-box-shadow: 7px 7px 5px #2F4F4F;
      -khtml-box-shadow: 7px 7px 7px #2F4F4F;`

     const Header = styled.h2`
     font-size: 35px;
     text-shadow: 2px 2px BlueViolet;`


    if (!place) {
        return <div>Loading restaurant information...</div>
    }

    return (
        <Card>
            <Header>{place.name}</Header>
            <h2>{place.address}</h2>
            <p>{place.description}</p>
        </Card>
    )
}

export default Description