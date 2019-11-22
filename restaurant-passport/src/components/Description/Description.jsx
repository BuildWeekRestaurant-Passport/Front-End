import React, { useState, useEffect, useRef } from 'react'
import api from '../../utils/api'
import styled from "styled-components"
import WebFont from 'webfontloader';

function Description(props) {
    const [place, setPlace] = useState();
    const [stamp, setStamp] = useState(false)

    const id = props.match.params.id;

    useEffect(() => {
        const data = localStorage.getItem(`Restaurant-${id}-state`)
        if (data) {
            setStamp(JSON.parse(data))

        }
    }, [])

    useEffect(() => {
        localStorage.setItem(`Restaurant-${id}-state`, JSON.stringify(stamp))
    })

    useEffect(() => {
        api().get(`/cities/restaurants/${id}`)
            .then(res => {
                console.log(res.data)
                setPlace(res.data)
            })
            .catch(err => {
                throw (err)
            })
    }, [])

    const toggleMode = e => {
        e.preventDefault();
        setStamp(!stamp);
    };

    const Card = styled.div`
    font-family: "Comic Sans MS", cursive, sans-serif;
font-size: 25px;
letter-spacing: 2px;
word-spacing: 2px;
color: #000000;
font-weight: normal;
text-decoration: none;
font-style: italic;
font-variant: normal;
text-transform: none;
     width: 60%;
     height: 50%;
     padding: 3%;
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: #FFCC99;
     margin: 5% 15%;
     border: 18px ridge #727EA4;
     border-radius: 50%;
     font-weight: 400;
     font-size: 1.75rem;
      box-shadow: 12px 12px 8px #181818;
       -moz-box-shadow: 15px 15px 10px #2F4F4F;
       -webkit-box-shadow: 15px 15px 10px #2F4F4F;
       -khtml-box-shadow: 15px 15px 10px #2F4F4F;`

    const Header = styled.h2`
     font-size: 3rem;
     text-shadow: 2px 2px BlueViolet;`

     


    if (!place) {
        return <div>Loading restaurant information...</div>
    }

    return (
        <Card>
            <Header>{place.name}</Header>
            <h2>{place.address}</h2>
            <p>{place.description}</p>
            <h3>Been here? Stamp it!</h3>

            <div className="stamp__toggle">

                <div
                    onClick={toggleMode}
                    className={stamp ? 'toggle toggled' : 'toggle'}
                />
            </div>

        </Card>

    )
}

export default Description