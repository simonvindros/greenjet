import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

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
            <StyledCalendarWrapper>
                <Calendar
                    activeStartDate={new Date(2021, 11, 1)}
                    selectRange={true}
                />
            </StyledCalendarWrapper>
            <StyledNextButton>
                <Link to="/flight-ticket">Next</Link>
            </StyledNextButton>
        </StyledFlightSearchWrapper>
    )
}

const StyledFlightSearchWrapper = styled.div`
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
    padding: 10px 0 25px 0;
    box-shadow: 0px 3px 10px grey;
    z-index: 10;
`

const StyledBackWrapper = styled.div`
    width: 100vw;
    margin-bottom: 4px;
    max-width: 800px;
    > span > a {
        text-decoration: none;
        color: #FFFFFF;
        margin-left: 12px;
    }
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

const StyledPageIndicatorWrapper = styled.div`
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75vw;
    max-width: 600px;
    padding: 20px;
    > div:nth-child(2) {
        opacity: 1;
    }
`

const StyledPageIndicator = styled.div`
    background-color: #39B7D4;
    opacity: 0.5;
    height: 10px;
    width: 6vw;
    max-width: 20px;
    border-radius: 2px;
`

const StyledCalendarWrapper = styled.div`
    padding: 0 0 20px 0;
    .react-calendar {
        width: 85vw;
        max-width: 680px;
        background: rgba(181, 228, 140, 0);
        border: none;
    }
    .react-calendar__navigation {
        background: white;
        border-radius: 20px;
    }
    .react-calendar__tile:hover {
        background: #39B7D4;
    }
    .react-calendar__tile--active {
        color: black;
        background: #128DA1;
    }
    .react-calendar--selectRange .react-calendar__tile--hover {
     background-color: #39B7D4;
    }
`

const StyledNextButton = styled.button`
    width: 130px;
    background-color: #B5E48C;
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