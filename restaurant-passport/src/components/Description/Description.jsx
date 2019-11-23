import React, { useState, useEffect, useRef } from 'react'
import api from '../../utils/api'
import styled from "styled-components"
import WebFont from 'webfontloader';
import { connect } from "react-redux";
import { fetchDescription } from '../../actions/description'
import { FaCheck } from 'react-icons/fa';


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

    // useEffect(() => {
    //     api().get(`/cities/restaurants/${id}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setPlace(res.data)
    //         })
    //         .catch(err => {
    //             throw (err)
    //         })
    // }, [])

    useEffect(() => {
        props.fetchDescription(id)
    }, [])

    const toggleMode = e => {
        e.preventDefault();
        setStamp(!stamp);
    };

    const Card = styled.div`
    font-family: "Comic Sans MS", cursive, sans-serif;
    font-size: 1.5625rem;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 500;
    text-decoration: none;
    font-style: italic;
    font-variant: normal;
    text-transform: none;

     width: 60%;
     height: 50%;
     padding: 3.75%;
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: #FFCC99;
     margin: 6% 15%;
     border: 18px ridge #727EA4;
     border-radius: 50%;
     
      box-shadow: 15px 15px 10px #181818;
       -moz-box-shadow: 20px 18px 10px #2F4F4F;
       -webkit-box-shadow: 20px 18px 10px #2F4F4F;
       -khtml-box-shadow: 20px 18px 10px #2F4F4F;`


    const Header = styled.h2`
     font-size: 3rem;
     text-shadow: 3px 3px BlueViolet;`


    if (!props.isLoading) {
        return (
            <Card>
                <Header>{props.description.name}</Header>
                <h2>{props.description.address}</h2>
                <p>{props.description.description}</p>
                <h3>Been here? Stamp it!</h3>

                <div className="stamp__toggle">

                    <div
                        onClick={toggleMode}
                        className={stamp ? 'toggle toggled' : 'toggle'}
                    ><FaCheck /></div>
                </div>

            </Card>

        )
    } else {
        return (
            <div>
                <h2>Loading restaurant data</h2>
            </div>
        )
    }


}

function mapStateToProps(state) {
    return {
        description: state.description.description,
        isLoading: state.description.isLoading,
        error: state.description.error
    }
}

const mapDispatchToProps = {
    fetchDescription
}

export default connect(mapStateToProps, mapDispatchToProps)(Description)