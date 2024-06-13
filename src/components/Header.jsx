import styled from "styled-components"
import teknolojikYemekler from "../assets/teknolojikYemekler.svg"
const Header = styled.header`
box-sizing: border-box;

position: absolute;
height: 207px;
left: 0px;
right: 0px;
top: 0px;

background: #CE2829;
border-bottom: 1px solid #C20608;
box-shadow: 0px 9px 150px -30px rgba(0, 0, 0, 0.09);

`

const Img = styled.img`
/* Teknolojik Yemekler */

text-align:center;
width: 361.93px;
height: 45.79px;
left: 780.21px;
top: 66.49px;
`
const Container = styled.div`
width:590px;
display:flex;
flex:0;
`

const Navbar = styled.nav
export default function Home() {
    return(
        <Header>
            <Img src={teknolojikYemekler} />
            
        </Header>
    )
}  