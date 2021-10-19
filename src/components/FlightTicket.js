import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
                <StyledTicket>

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
    }
    > p {
        flex-grow: 1;
        color: #128DA1;
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
    width: 20px;
    border-radius: 4px;
`

const StyledCompareTitles = styled.div`
    display: flex;
    width: 85vw;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 0 5px;
    color: #89DDC3;
`

const StyledCompareDateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85vw;
    padding: 25px 0 0 5px;
`

const StyledCompareOutDate = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 30vw;
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
    width: 30vw;
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

`

const StyledTicket = styled.div`
    
`

const StyledTicketFirstRow = styled.div`

`

const StyledTicketSecondRow = styled.div`

`

