import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo'

const FooterContainer = styled.div`
    min-height: fit-content;
    background-color: #1d2124;
    ${tw`
        min-w-full
        pt-10
        md:pt-16
        pb-1
        md:pb-3
        flex
        flex-col
        items-center
        justify-center
    `}
`

const InnerContainer = styled.div`

    ${tw`
        max-w-screen-2xl
        flex
        flex-wrap
        h-full
        w-full
        justify-center
    `}
`

const BottomContainer = styled.div`

    ${tw`
        flex
        min-w-full
        max-w-screen-2xl
        justify-center
        md:justify-end
        md:pr-5
        mt-7
        md:mt-1
    `}
`

const CopyrightText = styled.span`
    font-size: 11px;
    ${tw`
        text-gray-400
    `}
`

const AboutContainer = styled.div`

    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        pl-10
        pr-10
        md:pl-3
        md:pr-3
    `}
`

const AboutText = styled.p`

    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
        pr-10
        md:pl-3
        md:pr-3
    `}
`

const SectionContainer = styled.div`

    ${tw`
        flex
        flex-col
        mr-2
        md:mr-16
        w-full
        md:w-auto
        pl-10
        mt-6
        md:mt-0
    `}
`

const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col
    `}
`

const ListItem = styled.li`
    ${tw`
        mb-3
    `}
    & > a {
        ${tw`
            text-sm
            text-white
            transition-all
            hover:text-gray-200
        `}
    }
`

const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `}
`

const HorizontalContainer = styled.div`
    ${tw`
        flex
        items-center
        mb-3
    `}
`

const RedIcon = styled.span`
    ${tw`
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
        bg-red-500
    `}
`

const SmallText = styled.h6`
    ${tw`
        text-sm
        text-white
    `}
`

export function Footer() {

    return <FooterContainer>
        <InnerContainer>
            <AboutContainer>
                <Logo color='white' bgColor='dark' />
                <AboutText>
                    Mansos Autos es una compania que se dedica al 
                    alquiler y venta de autos. Posee sucursales
                    en diversos puntos del pais y latinoamérica.
                </AboutText>
            </AboutContainer>
            <SectionContainer>
            <HeaderTitle>Nuestros Links</HeaderTitle>
            <LinksList>
                <ListItem><a href="#">Home</a></ListItem>
                <ListItem><a href="#">Autos</a></ListItem>
                <ListItem><a href="#">Servicios</a></ListItem>
                <ListItem><a href="#">Modelos</a></ListItem>
                <ListItem><a href="#">Nosotros</a></ListItem>
            </LinksList>
            </SectionContainer>
            <SectionContainer>
            <HeaderTitle>Otros Links</HeaderTitle>
            <LinksList>
                <ListItem><a href="#">Preguntas Recientes</a></ListItem>
                <ListItem><a href="#">Politicas de Privacidad</a></ListItem>
                <ListItem><a href="#">Contactanos</a></ListItem>
                <ListItem><a href="#">Términos y Condiciones</a></ListItem>
            </LinksList>
            </SectionContainer>
            <SectionContainer>
                <HeaderTitle>Contactos</HeaderTitle>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faPhoneAlt}/>
                    </RedIcon>
                    <SmallText>+54 9 261-5489771</SmallText>
                </HorizontalContainer>
                <HorizontalContainer>
                    <RedIcon>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </RedIcon>
                    <SmallText>info@mansosautos.com</SmallText>
                </HorizontalContainer>
            </SectionContainer>
        </InnerContainer>
        <BottomContainer>
            <CopyrightText>Copyright &copy; {new Date().getFullYear()} Mansos Autos. Todos los derechos reservados.</CopyrightText>
        </BottomContainer>
    </FooterContainer>
}