import { FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 600px;
  height: 800px;
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
  align-items: center;
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
  font-size: 16px;
  color: #5f5f5f;
  flex-grow: 1;
`;

const Paragraf = styled.p`
  /* Frontent Dev olarak hala position:*/
  font-weight: 400;
  font-size: 16px;
  color: #5f5f5f;
  line-height: 28.8px;
`;
function Container() {
  return (
    <ContainerDiv>
      <DivItem>
        <OrderName>Position Absolute Acı Pizza</OrderName>
      </DivItem>

      <DivItem>
        <Price>85.50₺</Price>
        <Span>4.9</Span>
        <Span style={{ flexGrow: 0 }}>(200)</Span>
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
            <Input name="radio1" type="radio" />
            <Label check>Option one</Label>
          </FormGroup>
          <FormGroup check>
            <Input name="radio1" type="radio" />
            <Label check>Option two</Label>
          </FormGroup>
          <FormGroup check disabled>
            <Input disabled name="radio1" type="radio" />{" "}
            <Label check>Option three is disabled</Label>
          </FormGroup>
        </InnerDiv>

        <InnerDiv>
          <Select>Hamur Seç</Select>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </InnerDiv>
      </DivItem>
      <DivItem></DivItem>
      <DivItem></DivItem>
    </ContainerDiv>
  );
}

export default Container;
