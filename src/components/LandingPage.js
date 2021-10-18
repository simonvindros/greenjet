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
                        Amount of Travelers:
                    </StyledAmountOfTravelersTitle>
                    <StyledAmountOfTravelers placeholder='1' />
                </StyledAmountOfTravelersContainer>
                <StyledNextButton exact to='/flight-search'><Link to="/flight-search">Next</Link></StyledNextButton>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #B5E48C;
    height: 100vh;
`

const StyledNavBar = styled.div`
    width: 100vw;
    background: #39B7D4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 1px 10px;
    z-index: 10;
`

const StyledJetGreenLogo = styled.img`
    width: 100px;
    height: 100px;
    margin: 30px;
`

const StyledInputFrom = styled.input`
    width: 75vw;
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
    width: 210px;
`

const StyledAmountOfTravelersTitle = styled.div`
    color: white;
    font-size: 16px;
    margin-bottom: 4px;
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
    max-width: 340px;
    background: #B5E48C;
    font-size: 16px;
`