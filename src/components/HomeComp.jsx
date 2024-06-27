import { useHistory } from "react-router-dom";
import styled from "styled-components";

const HomePage = styled.div`
  font-family: "Barlow";
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 80vh;
  margin: 0;
  padding: 0;
  background-image: url("Assets/mile1-assets/home-banner.png");
  background-size: cover;
  background-position: center;
`;

const SiparisButonDiv = styled.div`

`

const SiparisButon = styled.button`
background-color: #fdc913;
  color: #292929;
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #292929; /* Metin rengi */
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  justify-content: center;
  line-height: 56px;
  width:200px;
  height:55px;
  margin:10px;
`









const Baslik = styled.h1`

  font-weight: 300;
  text-align: center;
  color: #faf7f2;
  font-size: 4.5rem;

  span{
    display: block;
  }
`


export default function HomeComp() {
  let history = useHistory();

  function handleClick() {
    history.push("/order");
  }

  return (
    <HomePage>
      <Baslik>
        <span>KOD ACIKTIRIR</span>
        <span> PİZZA DOYURUR</span>
      </Baslik>
      <SiparisButonDiv>
        <SiparisButon data-cy="aciktim-button" type="button" onClick={handleClick}>
          ACIKTIM
        </SiparisButon>
      </SiparisButonDiv>
    </HomePage>
  );
}
