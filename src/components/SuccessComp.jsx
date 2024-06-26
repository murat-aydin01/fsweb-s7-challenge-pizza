import React from 'react'
import styled from 'styled-components'
import StyledCard from './StyledCard'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

const SuccessDiv = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
width:100%;
min-width:600px;
height:80vh;
background: #CE2829;
color: white;
font-family:"Barlow";
`

const Yolda = styled.p`
font-family: 'Satisfy';
font-weight: 400;
font-size: 32px;
line-height: 44px;
color: #FDC913;
`

const Alindi = styled.p`
font-family: 'Roboto Condensed';
font-weight: 300;
font-size: 86px;
line-height: 92px;
letter-spacing: 1.5px;
text-transform: uppercase;
`

const Urun = styled.h2`
font-family: 'Barlow';
font-weight: 600;
font-size: 22px;
line-height: 29px;
`

const StyledHr = styled.hr`
  width: 80%;
  border: 1px solid white;
  margin: 20px 0;
`;

const Key = styled.span`
font-family: 'Barlow';
font-weight: 400;
font-size: 16px;
line-height: 25px;
`

const Value = styled(Key)`
font-weight:700;
`

const Ozet = styled.div`
width: 200px;
display:flex;
flex-direction:column;
row-gap:1rem;
margin:auto 50px;
`
const Satir = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;

`

const SiparisCard = styled(StyledCard)`
&&& {
    color: white;
    background: #CE2829;
    border: 1px solid white;

    h4 {
      color: white; // Select stilini override edin
    }

    p {
      color: white; // Secimler ve Toplam stilini override edin
    }
  }
`

function SuccessComp() {
    const location = useLocation();
    const response = location.state?.response;
    if (!response) {
        return <div>Loading...</div>; // veya uygun bir loading state
      }
  return (
    <SuccessDiv>
        <Yolda>lezzetin yolda</Yolda>
        <Alindi>siparişin alındı</Alindi>
        <StyledHr />
        <Urun>Position Absolute Acı Pizza</Urun>
        <Ozet>
        <Satir>
        <Key>Boyut: </Key>
        <Value>{response.boyut}</Value>
        </Satir>
        <Satir>
        <Key>Hamur: </Key>
        <Value>{response.hamur}</Value>
        </Satir>
        <Satir>
        <Key>Ek Malzemeler: </Key>
        <Value>{response.malzemeler.join(', ')}</Value>
        </Satir>
        </Ozet>
        <SiparisCard className={"yenikart"} ekFiyat={response.ekFiyat} toplamFiyat={response.toplamFiyat} showOrderButton={false}></SiparisCard>

    </SuccessDiv>
  )
}

export default SuccessComp