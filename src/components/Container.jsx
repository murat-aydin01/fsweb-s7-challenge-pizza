import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
} from "reactstrap";
import styled from "styled-components";
import Ingredients from "./Ingredients";

const StyledForm = styled(Form)`
  width: 600px;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
`;
const DivItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid red;
  flex-wrap: wrap;
  row-gap: 35px;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const OrderName = styled.h2`
  /* Position Absolute Acı Pizza */
  font-weight: 600;
  font-size: 22px;
  color: #292929;
`;

const Price = styled.h3`
  /* 85.50₺ */
  font-weight: 700;
  font-size: 28px;
  color: #292929;
  flex-grow: 2;
`;

const Select = styled.h4`
  /* Ek Malzemeler */
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #292929;
`;

const Span = styled.span`
  /* 4.9 */
  font-weight: 400;
  font-size: 1rem;
  color: #5f5f5f;
  flex-grow: 1;
`;

const Paragraf = styled.p`
  /* Frontent Dev olarak hala position:*/
  font-weight: 400;
  font-size: 1rem;
  color: #5f5f5f;
  line-height: 28.8px;
`;

const Uyari = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Secimler = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const Toplam = styled(Secimler)`
  color: red;
`;

const CounterInput = styled(Input)`
  text-align: center;
  max-width: 50px;
  -moz-appearance: textfield; /* Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Chrome, Safari, Edge, Opera */
  }
`;

const StyledCard = styled(Card)`
min-width:386px;
height:255px;
`

const SiparisButton = styled(Button)`
  background-color: #fdc913;
  font-size: 18px;
  font-weight: 600;
  line-height: 56px;
  height:62px;
  width:100%;
`;

const CounterButton = styled(Button)`
background-color: #fdc913;
width:47px;
`

const CounterGroup = styled(InputGroup)`
height:56px;
width:140px;
`

const StyledCardBody = styled(CardBody)`
display:flex;
flex-direction:column;
justify-content:space-around;
padding:40px;
box-sizing:content-box;
`

function Container() {
  return (
    <StyledForm>
      <DivItem>
        <OrderName>Position Absolute Acı Pizza</OrderName>
      </DivItem>

      <DivItem>
        <DivItem style={{ alignItems: "center" }}>
          <Price>85.50₺</Price>
          <Span>4.9</Span>
          <Span style={{ flexGrow: 0 }}>(200)</Span>
        </DivItem>
        <Paragraf>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </Paragraf>
      </DivItem>

      <DivItem>
        <InnerDiv>
          <Select>Boyut Seç</Select>
          <FormGroup check>
            <Input id="kucuk" name="kucuk" type="radio" />
            <Label for="kucuk" check>
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input id="orta" name="orta" type="radio" />
            <Label check for="orta">
              Orta
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input id="buyuk" name="buyuk" type="radio" />
            <Label for="buyuk" check>
              Büyük
            </Label>
          </FormGroup>
        </InnerDiv>

        <InnerDiv>
          <Select>Hamur Seç</Select>
          <FormGroup>
            <Input id="hamurSec" name="hamurSec" type="select">
              <option>Klasik</option>
              <option>ince</option>
            </Input>
          </FormGroup>
        </InnerDiv>
      </DivItem>
      <DivItem style={{ flexDirection: "column" }}>
        <Select>Ek Malzemeler</Select>
        <Uyari>En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺</Uyari>
        <Ingredients />
      </DivItem>

      <DivItem style={{ flexDirection: "column", alignItems: "stretch" }}>
        <Select>Sipariş Notu</Select>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input id="exampleText" name="text" type="textarea" />
          <hr></hr>
        </FormGroup>
        <InnerDiv
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <CounterGroup>
            <CounterButton>-</CounterButton>
            <CounterInput type="number"  />
            <CounterButton>+</CounterButton>
          </CounterGroup>

          <StyledCard>
            <StyledCardBody style={{display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
              <Select>Sipariş Toplamı</Select>
              <DivItem>
                <Secimler>Seçimler</Secimler>
                <Secimler>25.00₺</Secimler>
              </DivItem>
              <DivItem>
                <Toplam>Toplam</Toplam>
                <Toplam>110.50₺</Toplam>
              </DivItem>
            </StyledCardBody>
            <SiparisButton>SİPARİŞ VER</SiparisButton>
          </StyledCard>
        </InnerDiv>
      </DivItem>
    </StyledForm>
  );
}

export default Container;
