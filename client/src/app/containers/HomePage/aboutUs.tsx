import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive'
import JeepImg from '../../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pl-0
        md:pr-0
        bg-white
    `}
`

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}){
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 30em;
    }
    @media (min-width: ${SCREENS["2xl"]}){
        height: 35em;
        margin-left: 0;
    }
`

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `}
`

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `}
`

const InfoText = styled.p`
    ${tw`
        text-gray-500
        text-sm
        md:text-base
        md:max-w-2xl
        mt-4
        font-normal
    `}
`

export function AboutUs() {
    return <AboutUsContainer>
        <CarContainer>
            <img src={JeepImg} alt="" />
        </CarContainer>
        <InfoContainer>
            <Title>Viví la mejor experiencia con nuestras ofertas</Title>
            <InfoText>
                Mansos Autos es una compañía líder en alquiler de autos. Miles de personas en todo el mundo eligen disfrutar sus viajes en la comodidad y confort de nuestros vehículos. 
                En el año 2000 The Mansos Autos Corporation eligió como licencia maestra a la rentadora emblema mendocina Annie Millet por su expertise y éxito en el mercado local.
                Transformamos viajes en experiencias inolvidables. Mansos Autos opera desde hace más de 30 años en las principales ciudades y aeropuertos de la provincia, brindando al pasajero la posibilidad de manejar un vehículo en su destino elegido.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
}
