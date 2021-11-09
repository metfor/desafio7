import styled from"styled-components";
import image from"next/image";
import exp from "constants";
export const ContainerBody=styled.div`
    display:flex;
    width: 90%;
    height:100px;
    margin-left: 151px;

    align-items: center;
    justify-content: space-between;
`
export const BoxValorant=styled.div`
    margin-top:488px;
    display:grid;
    grid-row-gap: 45px ;
`
export const Valorant=styled(image)``
export const BoxArt=styled.div`
bottom:0;
position: absolute;
right: 31px;

`
export const BoxHeros=styled.div`
    display: grid;
    grid-template-columns: 170px 170px 170px;
    grid-column-gap: 26px;

`
export const BoxHero=styled.div`
width: 180px;
height:180px;

`
export const BoxStroke=styled.div`
    position: absolute;
    margin-top: -10px;
    margin-left: -10px;
`
export const Box=styled.div`
width:170px;
height:170px;
background-color: #ff4656;
position: absolute;
;
border:solid 1px #FFFFFF;
`