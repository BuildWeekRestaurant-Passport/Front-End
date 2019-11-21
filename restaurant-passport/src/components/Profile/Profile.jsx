import React from "react"
import styled from "styled-components";

const mainDiv = styled.div`
    position: relative;
    text-align: center;
    background-color: #e5e7ec;
    padding-bottom: 70%;
    border: 1px solid #a6a7a7;
    border-radius: 40px;
`
const welcomeDiv = styled.div`
    position: absolute;
    top: 11%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: #0A3055;
    background-color: rgba(221, 223, 224, 0.7);
    line-height: 2;
    margin: 5% 0;
    padding: 2%;
    border: 1px solid #10103f;
    border-radius: 20px;
`

function userProfile() {
    return (
        <div className="wrapper">
            <mainDiv>
                <welcomeDiv>
                    <h1>Welcome back fellow foodie!</h1>
                    <p>Your dream cuisines await.</p>
                </welcomeDiv>
                <memoriesDiv>
                    <p>Take a look at some of your recent dining experiences.</p>
                    {/* Carousel/display of images from recent outings */}
                </memoriesDiv>
                <suggestionDiv>
                    <p>Is your stomach talking to you? Maybe one of these places from your list can help.</p>
                {/* Suggest an outing to a restaurant from user's list */}
                </suggestionDiv>
            </mainDiv>            
        </div>

    )
}

export default userProfile