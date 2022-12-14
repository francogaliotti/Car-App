import { faCalendarAlt, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import { Button } from '../button'
import { Marginer } from '../marginer'
import { Calendar } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { SCREENS } from '../responsive'

const CardContainer = styled.div`
    min-height: 4.3em;
    box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-1
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pr-9
        md:pl-9
    `}
`

const ItemContainer = styled.div`
    ${tw`
        flex
        relative
    `}
`

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current
        text-xs
        md:text-base
        mr-1
        md:mr-3
    `}
`

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current
        text-xs
        md:text-base
        ml-1
    `}
`

const Name = styled.span`
    ${tw`
        text-gray-600
        text-xs
        md:text-sm
        cursor-pointer
        select-none
    `}
`

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `}
`

const DateCalendar = styled(Calendar)`
    position: absolute;
    top: 2em;
    left: 0;
    max-width: none;

    ${({offset}: any) => offset && css`
        left: -6em;
    `}

    @media (min-width: ${SCREENS.md}){
        top: 2.8em;
        left: -2em;
    }
` as any

export function BookCard() {

    const [startDate, setStartDate] = useState<Date>(new Date())
    const [endDate, setEndDate] = useState<Date>(new Date())
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false)
    const [isEndCalendarOpen, setEndCalendarOpen] = useState(false)

    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen)
        if(isEndCalendarOpen) setEndCalendarOpen(false)
    }

    const toggleEndDateCalendar = () => {
        setEndCalendarOpen(!isEndCalendarOpen)
        if(isStartCalendarOpen) setStartCalendarOpen(false)
    }


    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <Name onClick={toggleStartDateCalendar}> Fecha de Retiro</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
            </Icon>
            {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate}/>}
        </ItemContainer>
        <LineSeparator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <Name onClick={toggleEndDateCalendar}> Fecha de Retorno</Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isEndCalendarOpen ? faCaretUp : faCaretDown}/>
                </SmallIcon>
            </Icon>
            {isEndCalendarOpen && <DateCalendar offset value={endDate} onChange={setEndDate}/>}
        </ItemContainer>
        <Marginer direction='horizontal' margin='2em' />
        <Button text='Alquilar' />
    </CardContainer>
}
