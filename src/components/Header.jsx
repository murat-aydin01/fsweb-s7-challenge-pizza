import styled from "styled-components"
import teknolojikYemekler from "../assets/teknolojikYemekler.svg"

const HeaderSec = styled.header`
box-sizing: border-box;
display:flex;
justify-content:center;
height: 207px;
width:100%;

background: #CE2829;
border-bottom: 1px solid #C20608;
box-shadow: 0px 9px 150px -30px rgba(0, 0, 0, 0.09);

`

const Img = styled.img`
/* Teknolojik Yemekler */
/* Teknolojik Yemekler */

width: 361.93px;
height: 45.79px;
margin-top:66px;



`



export default function Header() {
    return(
        <HeaderSec>
            <Img src={teknolojikYemekler} />
        </HeaderSec>
    )
}  