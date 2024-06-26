import React from 'react';
import { Card, CardBody, Button } from "reactstrap";
import styled from "styled-components";

const StyledCardWrapper = styled(Card)`
  min-width: 386px;
  height: 255px;
`;

const StyledCardBody = styled(CardBody)`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: content-box;
`;

const Select = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: #292929;
`;

const DivItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 35px;
`;

const Secimler = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Toplam = styled(Secimler)`
  color: #ce2829;
`;

const SiparisButton = styled(Button)`
  width: 100%;
  height: 62px;
  line-height: 56px;
  background-color: #fdc913;
  font-size: 18px;
  font-weight: 600;
`;

function StyledCard({ ekFiyat, toplamFiyat, showOrderButton, isValid, className}) {
  return (
    <StyledCardWrapper className={className}>
      <StyledCardBody>
        <Select>Sipariş Toplamı</Select>
        <DivItem>
          <Secimler>Seçimler</Secimler>
          <Secimler className="test-ekFiyat">{ekFiyat}₺</Secimler>
        </DivItem>
        <DivItem>
          <Toplam>Toplam</Toplam>
          <Toplam className="test-toplamFiyat">{toplamFiyat}₺</Toplam>
        </DivItem>
      </StyledCardBody>
      {showOrderButton && <SiparisButton className="test-submit-button" disabled={!isValid}>SİPARİŞ VER</SiparisButton>}
    </StyledCardWrapper>
  );
}

export default StyledCard;
