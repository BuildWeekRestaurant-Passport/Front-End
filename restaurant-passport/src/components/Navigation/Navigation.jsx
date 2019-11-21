import React from "react";
// import { Button } from "semantic-ui-react";
import { Link, NavLink, Route } from "react-router-dom";
import styled from "styled-components";

//TODO: Import Components that will appear in Nav here.

export default function NavTabs() {
    const NavContent = styled.div`
        background-color: white;
        border: 1px solid #d5d7db;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
    `
    const NavBar = styled.div`
        display: flex;
        background-color: white;
        border-radius: 10px;
        margin: 10px 2%;
    `
    const NavLogo = styled.div`
        border-radius: 8px;
    `
    const NavMenu = styled.div`
        font-family: 'IM Fell English', serif;
        font-style: italic;
        position: absolute;              
        width: 40%;
        top: 8px;
        right: 16px;
        padding-top: 3.5%;
        padding-bottom: 1%;
        text-align: right;
    `
    return (
        <NavContent>
            <NavBar>
                <NavLogo>
                    <h1>
                        <NavLink exact to="/user-profile" className="logo">
                            <span>R</span>
                            estaurant
                            <span> P</span>
                            assport
                        </NavLink>
                    </h1>
                </NavLogo>
                <NavMenu>
                    <NavLink exact to="/user-profile" className="navMenu" activeStyle={{ color: 'red' }}>
                        Profile {/* Welcome back! page - shows recent experiences. Tracks 
                                progress of percentage of destinations visited vs total.
                                Suggests random location from list for next outing. */}
                    </NavLink>
                    <NavLink to="/places" className="navMenu" activeStyle={{ color: 'red' }}>
                        Restaurants {/* Michael's reastaurant list of all restaurants
                                        with visited places stamped. */}
                    </NavLink>
                    <NavLink to="/stamped" className="navMenu" activeStyle={{ color: 'red' }}>
                        Stamps {/* All stamped locations. Will store favorite locations and
                                    top 3 memorable moments from all trips, or something. */}
                    </NavLink>
                    {/* <NavLink to="/account" className="navMenu">
                        Preferences {/* Account page - user selects cuisine preferences,
                                    environment types (outdoor, rooftop, live music, etc)*/}
                    {/* </NavLink> */}

                    <Route exact path="/account" /> {/* TODO: Add components to routes. */}
                    <Route exact path="/places" />
                    <Route path="/stamped" />
                    <Route path="/user-profile" />  
                </NavMenu>              
            </NavBar>
        </NavContent>
    )
}