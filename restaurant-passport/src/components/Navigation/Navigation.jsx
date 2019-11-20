import React from "react";
import { Button } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";

//TODO: Import Components that will appear in Nav here.

export default function NavTabs() {
    return (
        <div className="navbar grid-view">
            <Button.Group widths="4" className="navbar">
                <Button as={NavLink} exact to="/user-profile" activeClassName="activeNavButton">
                    Profile {/* Welcome back! page - shows recent experiences. Tracks 
                             progress of percentage of destinations visited vs total.
                             Suggests random location from list for next outing. */}
                </Button>
                <Button as={NavLink} to="/places" activeClassName="activeNavButton">
                    View Restaurants {/* Michael's reastaurant list of all restaurants
                                     with visited places stamped. */}
                </Button>
                <Button as={NavLink} to="/stamped" activeClassName="activeNavButton">
                    Stamped Collection {/* All stamped locations. Will store favorite locations and
                                top 3 memorable moments from all trips, or something. */}
                </Button>
                <Button as={NavLink} to="/account" activeClassName="activeNavButton">
                    Preferences {/* Account page - user selects cuisine preferences,
                                environment types (outdoor, rooftop, live music, etc)*/}
                </Button>
            </Button.Group>

            <Route exact path="/account" /> {/* TODO: Add components to routes. */}
            <Route exact path="/places" />
            <Route path="/stamped" />
            <Route path="/user-profile" />
        </div>
    )
}