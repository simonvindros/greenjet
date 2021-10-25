import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import plane2 from '../assets/plane2.png'
import circle from '../assets/circle.png'
import vertline3 from '../assets/vertline3.png'

export default function ChosenOption() {
    return (
        <StyledChosenOptionWrapper>
            <StyledNavBar>
                <Link exact to='/flight-ticket'>{`<`}</Link>
                <p>
                    Stockholm - Köpenhamn
                </p>
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
            </StyledPageIndicatorWrapper>
            <StyledDepAndReturnOption>
                <StyledDepartureOption>
                    <StyledDepartureHeader>
                        <h3>Departure</h3>
                        <h3>2 Dec</h3>
                    </StyledDepartureHeader>
                    <StyledDepartureOptionInnerContainer>
                        <StyledDepartureOptionImgContainer>
                            <img src={circle} />
                            <img src={vertline3} />
                            <img src={plane2} />
                            <img src={vertline3} />
                            <img src={circle} />
                        </StyledDepartureOptionImgContainer>
                        <StyledDepartureOptionTextContainer>
                            <p><strong>07:00</strong> Stockholm Arlanda(ARN)</p>
                            <p>1 hour</p>
                            <p><strong>08:00</strong> Köpenhamn Kastrup(CPH)</p>
                        </StyledDepartureOptionTextContainer>
                    </StyledDepartureOptionInnerContainer>
                </StyledDepartureOption>
                <StyledReturnOption>
                    <StyledReturnHeader>
                        <h3>Return</h3>
                        <h3>21 Dec</h3>
                    </StyledReturnHeader>
                    <StyledReturnOptionInnerContainer>
                        <StyledReturnOptionImgContainer>
                            <img src={circle} />
                            <img src={vertline3} />
                            <img src={plane2} />
                            <img src={vertline3} />
                            <img src={circle} />
                        </StyledReturnOptionImgContainer>
                        <StyledReturnOptionTextContainer>
                            <p><strong>07:00</strong> Köpenhamn Kastrup(CPH)</p>
                            <p>1 hour</p>
                            <p><strong>08:00</strong> Stockholm Arlanda(ARN)</p>
                        </StyledReturnOptionTextContainer>
                    </StyledReturnOptionInnerContainer>
                </StyledReturnOption>
            </StyledDepAndReturnOption>
            <StyledNextButton>
                <Link exact to='/travel-profile'>Next</Link>
            </StyledNextButton>
        </StyledChosenOptionWrapper>
    )
}

const StyledChosenOptionWrapper = styled.div`
    display: flex;
    max-width: 800px;
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
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 3px 10px grey;
    z-index: 10;
    > a {
        flex-grow: 1;
        text-decoration: none;
        color: white;
        font-wieght: bold;
        padding-left: 15px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
    > p {
        margin-left: -20px;
        flex-grow: 1;
        color: #128DA1;
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 20px;
        padding: 10px 0 10px 0;
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
    > div:nth-child(4) {
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

const StyledDepAndReturnOption = styled.div`
    display: flex;
    width: 90vw;
    max-width: 720px;
    flex-direction: column;
    justify-content: space-around;
    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`

const StyledDepartureOption = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 10px;
    background: white;
    border: 2px solid #128DA1;
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 10px;
    min-height: 170px;
    @media (min-width: 500px) {
        width: 40vw;
        max-width: 322px;
    }
`

const StyledDepartureHeader = styled.div`
    display: flex;
    padding: 4px;
    > h3 {
        display: inline-block;
        margin-block-start: 0;
        margin-block-end: 0;
        color: #128DA1;
    }
    > h3:nth-child(2) {
        color: #B5E48C;
        margin-left: 6px;
    }
`

const StyledDepartureOptionInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4px;
`

const StyledDepartureOptionImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
        width: 15px;
        height: 15px;
    }
`

const StyledDepartureOptionTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 4px;
    > p {
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 12px;
    }
`

const StyledReturnOption = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 0 10px;
    background: white;
    border: 2px solid #128DA1;
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 10px;
    min-height: 170px;
    @media (min-width: 500px) {
        width: 40vw;
        max-width: 322px;
    }
`

const StyledReturnHeader = styled.div`
    display: flex;
    padding: 4px;
    > h3 {
        display: inline-block;
        margin-block-start: 0;
        margin-block-end: 0;
        color: #128DA1;
    }
    > h3:nth-child(2) {
        color: #B5E48C;
        margin-left: 6px;
    }
`

const StyledReturnOptionInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 4px;
`

const StyledReturnOptionImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
        width: 15px;
        height: 15px;
    }
`

const StyledReturnOptionTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 4px;
    > p {
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 12px;
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
