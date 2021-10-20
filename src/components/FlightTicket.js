import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import saslogo from '../assets/saslogo.jpg'

export default function FlightTicket() {
    return (
        <StyledFlightTicketWrapper>
            <StyledNavBar>
                <Link exact to='/flight-search'>{`<`}</Link>
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
                <StyledPageIndicator />
            </StyledPageIndicatorWrapper>
            <StyledCompareTitles>
                <p>Compare dep. date</p>
                <p>Compare arr. date</p>
            </StyledCompareTitles>
            <StyledCompareDateWrapper>
                <StyledCompareOutDate>
                    <StyledCompareOutDateOne>
                        <div />
                        <p>30</p>
                    </StyledCompareOutDateOne>
                    <StyledCompareOutDateTwo>
                        <div />
                        <p>1</p>
                    </StyledCompareOutDateTwo>
                    <StyledCompareOutDateThree>
                        <div />
                        <p>2</p>
                    </StyledCompareOutDateThree>
                    <StyledCompareOutDateFour>
                        <div />
                        <p>3</p>
                    </StyledCompareOutDateFour>
                    <StyledCompareOutDateFive>
                        <div />
                        <p>4</p>
                    </StyledCompareOutDateFive>
                </StyledCompareOutDate>
                <StyledCompareInDate>
                    <StyledCompareInDateOne>
                        <div />
                        <p>19</p>
                    </StyledCompareInDateOne>
                    <StyledCompareInDateTwo>
                        <div />
                        <p>20</p>
                    </StyledCompareInDateTwo>
                    <StyledCompareInDateThree>
                        <div />
                        <p>21</p>
                    </StyledCompareInDateThree>
                    <StyledCompareInDateFour>
                        <div />
                        <p>22</p>
                    </StyledCompareInDateFour>
                    <StyledCompareInDateFive>
                        <div />
                        <p>23</p>
                    </StyledCompareInDateFive>
                </StyledCompareInDate>
            </StyledCompareDateWrapper>
            <StyledTicketOptionWrapper>
                <StyledLink exact to="chosen-option">
                    <StyledTicket>
                        <StyledTicketRowWrapper>
                            <StyledTicketFirstRow>
                                <StyledTicketFirstRowOne>
                                    <img src={saslogo} /><p>ARN - CPH</p>
                                </StyledTicketFirstRowOne>
                                <StyledTicketFirstRowTwo>
                                    <p>07:00 - 08:00 (1 Hour)</p>
                                    <p>No stopovers</p>
                                </StyledTicketFirstRowTwo>
                            </StyledTicketFirstRow>
                            <StyledTicketSecondRow>
                                <StyledTicketSecondRowOne>
                                    <img src={saslogo} />
                                    <p>CPH - ARN</p>
                                </StyledTicketSecondRowOne>
                                <StyledTicketSecondRowTwo>
                                    <p>07:00 - 08:00 (1 Hour)</p>
                                    <p>No stopovers</p>
                                </StyledTicketSecondRowTwo>
                            </StyledTicketSecondRow>
                        </StyledTicketRowWrapper>
                        <StyledTicketPriceBox>
                            <p>2000 : -</p>
                        </StyledTicketPriceBox>
                    </StyledTicket>
                </StyledLink>
                <StyledTicket>
                    <StyledTicketRowWrapper>
                        <StyledTicketFirstRow>
                            <StyledTicketFirstRowOne>
                                <img src={saslogo} /><p>ARN - MMX - CPH</p>
                            </StyledTicketFirstRowOne>
                            <StyledTicketFirstRowTwo>
                                <p>07:00 - 08:00 (1 Hour)</p>
                                <p>1 Stop (Malmö)</p>
                            </StyledTicketFirstRowTwo>
                        </StyledTicketFirstRow>
                        <StyledTicketSecondRow>
                            <StyledTicketSecondRowOne>
                                <img src={saslogo} />
                                <p>CPH - MMX - ARN</p>
                            </StyledTicketSecondRowOne>
                            <StyledTicketSecondRowTwo>
                                <p>07:00 - 08:00 (1 Hour)</p>
                                <p>1 Stop (Malmö)</p>
                            </StyledTicketSecondRowTwo>
                        </StyledTicketSecondRow>
                    </StyledTicketRowWrapper>
                    <StyledTicketPriceBox>
                        <p>1500 : -</p>
                    </StyledTicketPriceBox>
                </StyledTicket>
                <StyledTicket>
                    <StyledTicketRowWrapper>
                        <StyledTicketFirstRow>
                            <StyledTicketFirstRowOne>
                                <img src={saslogo} /><p>ARN - CPH</p>
                            </StyledTicketFirstRowOne>
                            <StyledTicketFirstRowTwo>
                                <p>15:00 - 16:00 (1 Hour)</p>
                                <p>No stopovers</p>
                            </StyledTicketFirstRowTwo>
                        </StyledTicketFirstRow>
                        <StyledTicketSecondRow>
                            <StyledTicketSecondRowOne>
                                <img src={saslogo} />
                                <p>CPH - ARN</p>
                            </StyledTicketSecondRowOne>
                            <StyledTicketSecondRowTwo>
                                <p>15:00 - 16:00 (1 Hour)</p>
                                <p>No stopovers</p>
                            </StyledTicketSecondRowTwo>
                        </StyledTicketSecondRow>
                    </StyledTicketRowWrapper>
                    <StyledTicketPriceBox>
                        <p>2000 : -</p>
                    </StyledTicketPriceBox>
                </StyledTicket>
                <StyledTicket>
                    <StyledTicketRowWrapper>
                        <StyledTicketFirstRow>
                            <StyledTicketFirstRowOne>
                                <img src={saslogo} /><p>ARN - MMX - CPH</p>
                            </StyledTicketFirstRowOne>
                            <StyledTicketFirstRowTwo>
                                <p>15:00 - 16:00 (1 Hour)</p>
                                <p>1 Stop (Malmö)</p>
                            </StyledTicketFirstRowTwo>
                        </StyledTicketFirstRow>
                        <StyledTicketSecondRow>
                            <StyledTicketSecondRowOne>
                                <img src={saslogo} />
                                <p>CPH - MMX - ARN</p>
                            </StyledTicketSecondRowOne>
                            <StyledTicketSecondRowTwo>
                                <p>15:00 - 16:00 (1 Hour)</p>
                                <p>1 Stop (Malmö)</p>
                            </StyledTicketSecondRowTwo>
                        </StyledTicketSecondRow>
                    </StyledTicketRowWrapper>
                    <StyledTicketPriceBox>
                        <p>1500 : -</p>
                    </StyledTicketPriceBox>
                </StyledTicket>
            </StyledTicketOptionWrapper>
        </StyledFlightTicketWrapper>
    )
}

const StyledFlightTicketWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(181, 228, 140, 0.3);
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 3px 10px grey;
`

const StyledNavBar = styled.div`
    width: 100vw;
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
        margin-left: -15px;
        flex-grow: 1;
        color: #128DA1;
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 20px;
    }
`

const StyledPageIndicatorWrapper = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 75vw;
    padding: 20px;
    > div:nth-child(3) {
        opacity: 1;
    }
`

const StyledPageIndicator = styled.div`
    background-color: #39B7D4;
    opacity: 0.5;
    height: 10px;
    width: 6vw;
    border-radius: 2px;
`

const StyledCompareTitles = styled.div`
    display: flex;
    width: 86vw;
    flex-direction: row;
    justify-content: space-around;
    color: #89DDC3;
        > p {
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 16px;
    }
`

const StyledCompareDateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 85vw;
    padding: 25px 0 0 5px;
`

const StyledCompareOutDate = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 35vw;
`

const StyledCompareOutDateOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 50%,rgba(181, 228, 140, 1) 50%);
    }
`
const StyledCompareOutDateTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 0%,rgba(181, 228, 140, 1) 1%);
    }
`
const StyledCompareOutDateThree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(137, 221, 195, 0) 25%,rgba(137, 221, 195, 1) 25%);
    }
`
const StyledCompareOutDateFour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 50%,rgba(181, 228, 140, 1) 50%);
    }
`
const StyledCompareOutDateFive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 25%,rgba(181, 228, 140, 1) 25%);
    }
`

const StyledCompareInDate = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 35vw;
`

const StyledCompareInDateOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 0%,rgba(181, 228, 140, 1) 1%);
    }
`
const StyledCompareInDateTwo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 25%,rgba(181, 228, 140, 1) 25%);
    }
`
const StyledCompareInDateThree = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(137, 221, 195, 0) 50%,rgba(137, 221, 195, 1) 50%);
    }
`
const StyledCompareInDateFour = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 25%,rgba(181, 228, 140, 1) 25%);
    }
`
const StyledCompareInDateFive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > div {
        width: 2vw;
        height: 50px;
        background: linear-gradient(180deg, rgba(181, 228, 140, 0) 0%,rgba(181, 228, 140, 1) 1%);
    }
`

const StyledTicketOptionWrapper = styled.div`
    display: flex;
    width: 85vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 740px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

const StyledTicket = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 85vw;
    background: white;
    border: 2px solid #128DA1;
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 10px;
    @media (max-width: 310px) {
        flex-direction: column;
    }
    @media (min-width: 740px) {
        width: 40vw;
    }
    @media (min-width: 960px) {
        width: 35vw;
    }
`

const StyledTicketRowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 9;
`

const StyledTicketFirstRow = styled.div`
    display: flex;
    flex-direction: row;
`

const StyledTicketFirstRowOne = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    width: 40%;
    border-bottom: solid 1px black;
    > img {
        width: 20px;
        height: 20px;
    }
    > p {
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 12px;
        color: #39B7D4;
    }
`

const StyledTicketFirstRowTwo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: end;
    width: 60%;
    border-bottom: solid 1px black;
    > p {
        font-size: 12px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
`

const StyledTicketSecondRow = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 50px;
    margin-top: 4px;
`

const StyledTicketSecondRowOne = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    width: 40%;
    > img {
        width: 20px;
        height: 20px;
    }
    > p {
        font-size: 12px;
        margin-block-start: 0;
        margin-block-end: 0;
        color: #39B7D4;
    }
`

const StyledTicketSecondRowTwo = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: end;
    width: 60%;
    > p {
        font-size: 12px;
        margin-block-start: 0;
        margin-block-end: 0;
    }
`

const StyledTicketPriceBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 0.5;
    border-radius: 0 10px 10px 0;
    justify-content: end;
    align-items: center;
    > p {
        margin-block-start: 0;
        margin-block-end: 0;
        font-size: 14px;
        color: #39B7D4;
    }
    @media (max-width: 310px) {
        flex-direction: row;
        flex-grow: 1;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`