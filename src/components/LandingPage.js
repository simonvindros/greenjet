import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import jetgreenlogo from '../assets/jetgreenlogo.png'

export default function LandingPage() {

    return (
        <StyledLandingPageWrapper>
            <StyledNavBar>
                <StyledJetGreenLogo src={jetgreenlogo} />
                <StyledInputFrom placeholder='From' />
                <StyledInputTo placeholder='To' />
                <StyledAmountOfTravelersContainer>
                    <StyledAmountOfTravelersTitle>
                        <h5>
                            Amount of Travelers:
                        </h5>
                    </StyledAmountOfTravelersTitle>
                    <StyledAmountOfTravelers placeholder='1' />
                </StyledAmountOfTravelersContainer>
                <StyledNextButton>
                    <Link to="/flight-search">Next</Link>
                </StyledNextButton>
            </StyledNavBar>
            <StyledGreenJetReminder>
                <h5>
                    Res med gott samvete med GreenJet.
                </h5>
                Låt oss boka resa klimatkompenserat så enkelt som möjligt för dig och dina medresenärer.
                <br />
                <br />
                Res endast om du är frisk, undvik rusningstrafik om du har möjlighet och följ anvisningar ombord.
            </StyledGreenJetReminder>
        </StyledLandingPageWrapper>
    )
}

const StyledLandingPageWrapper = styled.div`
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(181, 228, 140, 0.3);
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 3px 10px grey;
`

const StyledNavBar = styled.div`
    width: 100vw;
    max-width: 800px;
    background: #39B7D4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 3px 10px grey;
    z-index: 10;
`

const StyledJetGreenLogo = styled.img`
    width: 100px;
    height: 100px;
    margin: 30px;
`

const StyledInputFrom = styled.input`
    width: 75vw;
    max-width: 600px;
    background: #128DA1;
    border: none;
    margin: 0 0 20px 0;
    color: white;
    padding: 8px;
    ::placeholder {
        color: white;
        opacity: 1;
    }
`

const StyledInputTo = styled.input`
    width: 75vw;
    max-width: 600px;
    background: #128DA1;
    border: none;
    margin: 0 0 10px 0;
    color: white;
    padding: 8px;
    ::placeholder {
        color: white;
        opacity: 1;
    }
`

const StyledAmountOfTravelersContainer = styled.div`
    width: 75vw;
    max-width: 600px;
`

const StyledAmountOfTravelersTitle = styled.div`
    color: white;
    margin-bottom: 4px;
    > h5 {
        margin-block-start: 0;
        margin-block-end: 0;
    }
`

const StyledAmountOfTravelers = styled.input`
    max-width: 10px;
    background: #128DA1;
    border: none;
    margin: 0 0 10px 0;
    color: white;
    padding: 6px;
    ::placeholder {
        color: white;
        opacity: 1;
    }
    float: left;   
`

const StyledNextButton = styled.button`
    width: 130px;
    background-color: #89DDC3;
    border: none;
    margin: 0 0 10px 0;
    color: black;
    padding: 8px;
    border-radius: 15px;
    font-weight: bold;
    > a {
        text-decoration: none;
        color: black;
    }
`

const StyledGreenJetReminder = styled.p`
    max-width: 500px;
    background: rgba(181, 228, 140, 0);
    font-size: 16px;
    margin: 14px;
`