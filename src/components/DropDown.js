import React, { useState } from 'react'
import styled from 'styled-components'

export default function DropDown({ title }, { items }) {

    const [open, setOpen] = useState(false)
    const [selection, setSelection] = useState([])
    const toggle = () => setOpen(!open)

    function handleOnClick(item) { }

    return (
        <StyledDropDownWrapper>
            <StyledDropDownHeader
                tabIndex={0}
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>
                <StyledDropDownHeaderTitle>
                    <StyledDropDownHeaderTitleBold>
                        {title}
                    </StyledDropDownHeaderTitleBold>
                    <StyledDropDownHeaderAction>
                        <p>{open ? 'Close' : 'Open'}</p>
                    </StyledDropDownHeaderAction>
                </StyledDropDownHeaderTitle>
            </StyledDropDownHeader>
        </StyledDropDownWrapper>
    )
}

const StyledDropDownWrapper = styled.div`
    display: flex;
    min-height: 38px;
    flex-wrap: wrap;
    background-color: white;
`

const StyledDropDownHeader = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    width: 100%;
    padding: 0 20px;
`

const StyledDropDownHeaderTitle = styled.div`

`

const StyledDropDownHeaderTitleBold = styled.p`
    font-weight: bold;
`

const StyledDropDownHeaderAction = styled.div`

`