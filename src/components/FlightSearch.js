import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function FlightSearch() {
    return (
        <StyledFlightSearchWrapper>
            <StyledNavBar>
                <StyledBackWrapper>
                    <span>
                        <Link exact to='/'>{`<`}</Link>
                    </span>
                </StyledBackWrapper>
                <StyledInputFrom placeholder='Stockholm Arlanda' />
                <StyledInputTo placeholder='Copenhagen Kastrup' />
            </StyledNavBar>
            <StyledPageIndicatorWrapper>
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
                <StyledPageIndicator />
            </StyledPageIndicatorWrapper>
        </StyledFlightSearchWrapper>
    )
}

const StyledFlightSearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #B5E48C;
`

const StyledNavBar = styled.div`
    width: 100vw;
    background: #39B7D4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 15px 15px;
    padding: 10px 0 25px 0;
    box-shadow: 0px 1px 10px;
    z-index: 10;
`

const StyledBackWrapper = styled.div`
    width: 100vw;
    > span > a {
        text-decoration: none;
        color: #FFFFFF;
        margin-left: 12px;
    }
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

const StyledPageIndicatorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75vw;
    padding: 20px;
    > div:nth-child(2) {
        opacity: 1;
    }
`

const StyledPageIndicator = styled.div`
    background-color: #39B7D4;
    opacity: 0.5;
    height: 10px;
    width: 20px;
    border-radius: 4px;
`