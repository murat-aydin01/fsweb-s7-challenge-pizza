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
import Ingredients, { ingredients } from "./Ingredients";
import { useEffect, useState } from "react";

const StyledForm = styled(Form)`
  width: 600px;
  margin: 35px auto 0 auto;
  border: 1px solid black;
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
  flex-wrap: wrap;
  border: 1px solid red;
  row-gap: 35px;
`;

const Malzemeler = styled(DivItem)`
  flex-direction: column;
`;

const PizzaBilgileri = styled(DivItem)`
  align-items: center;
  & > *:last-child {
    flex-grow: 0;
  }
`;

const SiparisSection = styled(DivItem)`
  flex-direction: column;
  align-items: stretch;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const SiparisCards = styled(InnerDiv)`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const OrderName = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #292929;
`;

const Price = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #292929;
  flex-grow: 2;
`;

const Select = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: #292929;
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #5f5f5f;
  flex-grow: 1;
`;

const Paragraf = styled.p`
  font-size: 1rem;
  font-weight: 400;
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
  max-width: 50px;
  text-align: center;
  -moz-appearance: textfield; /* Firefox */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; /* Chrome, Safari, Edge, Opera */
  }
`;

const StyledCard = styled(Card)`
  min-width: 386px;
  height: 255px;
`;

const SiparisButton = styled(Button)`
  width: 100%;
  height: 62px;
  line-height: 56px;
  background-color: #fdc913;
  font-size: 18px;
  font-weight: 600;
`;

const CounterButton = styled(Button)`
  width: 47px;
  background-color: #fdc913;
`;

const CounterGroup = styled(InputGroup)`
  height: 56px;
  width: 140px;
`;

const StyledCardBody = styled(CardBody)`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: content-box;
`;

const initForm = {
  isim: "",
  boyut: "",
  hamur: "",
  malzemeler: [],
  adet: 1,
  ekFiyat: 0,
  toplamFiyat: 0,
  not: "",
};

const initErr = {
  isim: false,
  boyut: false,
  malzemeler: false,
  not: false,
};

function Container() {
  const [form, setForm] = useState(initForm);

  const [err, setErr] = useState(initErr);

  const [isValid, SetIsValid] = useState(false);

  function handleChange(event) {
    const { value, name, type, checked } = event.target;
    let oldValue = form.malzemeler;
    if (type == "checkbox") {
      if (checked) {
        const newValue = [...oldValue, value];
        setForm({ ...form, [name]: newValue });
      } else {
        const newValue = oldValue.filter((v) => v !== value);
        setForm({ ...form, [name]: newValue });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  }

  useEffect(() => {
    console.log(form);
  }, [form]);

  function handleSubmit() {}

  function increase() {}

  function decrease() {}

  function hesapla() {}

  return (
    <StyledForm>
      <DivItem>
        <OrderName>Position Absolute Acı Pizza</OrderName>
      </DivItem>

      <DivItem>
        <PizzaBilgileri>
          <Price>85.50₺</Price>
          <Span>4.9</Span>
          <Span>(200)</Span>
        </PizzaBilgileri>
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
            <Input
              id="kucuk"
              name="boyut"
              value="Küçük"
              checked={form.boyut == "Küçük"}
              onChange={handleChange}
              type="radio"
            />
            <Label for="kucuk" check>
              Küçük
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="orta"
              name="boyut"
              value="Orta"
              checked={form.boyut == "Orta"}
              onChange={handleChange}
              type="radio"
            />
            <Label check for="orta">
              Orta
            </Label>
          </FormGroup>
          <FormGroup check>
            <Input
              id="buyuk"
              name="boyut"
              value="Büyük"
              checked={form.boyut == "Büyük"}
              onChange={handleChange}
              type="radio"
            />
            <Label for="buyuk" check>
              Büyük
            </Label>
          </FormGroup>
        </InnerDiv>

        <InnerDiv>
          <Select>Hamur Seç</Select>
          <FormGroup>
            <Input
              name="hamur"
              value={form.hamur}
              onChange={handleChange}
              type="select"
            >
              <option value="" style={{ display: "none" }}>
                Seçiniz
              </option>
              <option value="klasik">Klasik</option>
              <option value="ince">ince</option>
            </Input>
          </FormGroup>
        </InnerDiv>
      </DivItem>
      <Malzemeler>
        <Select>Ek Malzemeler</Select>
        <Uyari>En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺</Uyari>
        <Ingredients malzemeler={form.malzemeler} changeFn={handleChange} />
      </Malzemeler>

      <SiparisSection>
        <Select>İsim</Select>
        <FormGroup>
          <Input
            name="isim"
            type="input"
            value={form.isim}
            onChange={handleChange}
          />
          <hr></hr>
        </FormGroup>

        <Select>Sipariş Notu</Select>
        <FormGroup>
          <Input
            name="not"
            type="textarea"
            value={form.not}
            onChange={handleChange}
          />
          <hr></hr>
        </FormGroup>
        <SiparisCards>
          <CounterGroup>
            <CounterButton type="button" onClick={decrease}>
              -
            </CounterButton>
            <CounterInput
              type="number"
              name="adet"
              value={form.adet}
              onChange={handleChange}
            />
            <CounterButton type="button" onClick={increase}>
              +
            </CounterButton>
          </CounterGroup>

          <StyledCard>
            <StyledCardBody>
              <Select>Sipariş Toplamı</Select>
              <DivItem>
                <Secimler>Seçimler</Secimler>
                <Secimler>{form.ekFiyat}₺</Secimler>
              </DivItem>
              <DivItem>
                <Toplam>Toplam</Toplam>
                <Toplam>{form.toplamFiyat}₺</Toplam>
              </DivItem>
            </StyledCardBody>
            <SiparisButton onClick={handleSubmit}>SİPARİŞ VER</SiparisButton>
          </StyledCard>
        </SiparisCards>
      </SiparisSection>
    </StyledForm>
  );
}

export default Container;
