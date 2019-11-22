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
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: #FFE4B5;
     margin: 0% 20%;
     border: 15px ridge #A41C59;
     border-radius: 50%;
     font-weight: 400;
     font-size: 1.5rem;
     box-shadow: 12px 12px 8px #2F4F4F;
      -moz-box-shadow: 15px 15px 10px #2F4F4F;
      -webkit-box-shadow: 15px 15px 10px #2F4F4F;
      -khtml-box-shadow: 15px 15px 10px #2F4F4F;`

    const Header = styled.h2`
     font-size: 2.25rem;
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