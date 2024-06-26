import { Button, Form, FormGroup, Input, InputGroup, Label } from "reactstrap";
import styled from "styled-components";
import Ingredients from "./Ingredients";
import StyledCard from "./StyledCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const StyledForm = styled(Form)`
  width: 600px;
  margin: 35px auto 0 auto;
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

const Warning = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  color: #ce2829;
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

const CounterButton = styled(Button)`
  width: 47px;
  background-color: #fdc913;
`;

const CounterGroup = styled(InputGroup)`
  height: 56px;
  width: 140px;
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
  hamur: false,
  malzemeler: false,
};

function Container() {
  const [form, setForm] = useState(initForm);

  const [err, setErr] = useState(initErr);

  const [isValid, SetIsValid] = useState(false);

  let history = useHistory();

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
      if (name == "adet") {
        if (value === "" || (value > 0 && !isNaN(value))) {
          setForm({ ...form, adet: value });
        }
      } else {
        setForm({ ...form, [name]: value });
      }
    }
  }

  function validate(form) {
    const errors = {
      isim: form.isim.length < 3,
      boyut: !form.boyut,
      hamur: !form.hamur,
      malzemeler: form.malzemeler.length < 4 || form.malzemeler.length > 10,
    };
    setErr(errors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) {
      return;
    }

    axios
      .post("https://reqres.in/api/pizza", form)
      .then((response) => {
        console.log("SİPARİŞ ÖZETİ:", response.data);
        history.push("/success", { response: response.data });
      })
      .catch((err) => console.log("HATA OLUŞTU:", err));
  }

  useEffect(() => {
    validate(form);

    console.log(form);
  }, [form]);

  useEffect(() => {
    SetIsValid(Object.values(err).every((val) => val === false));
    console.log(err);
  }, [err]);

  function increase() {
    if (form.adet == "") {
      setForm({ ...form, adet: 1 });
    } else {
      let newCount = parseInt(form.adet) + 1;
      setForm({ ...form, adet: newCount });
    }
  }

  function decrease() {
    if (form.adet == "") {
      setForm({ ...form, adet: 1 });
    } else {
      let newCount = parseInt(form.adet) - 1;
      if (newCount > 0) {
        setForm({ ...form, adet: newCount });
      }
    }
  }

  useEffect(() => {
    hesapla();
  }, [form.malzemeler, form.adet]);

  function hesapla() {
    let ekFiyat = form.malzemeler.length * 5;
    let toplamFiyat = (ekFiyat + 85.5) * form.adet;
    setForm({ ...form, ekFiyat: ekFiyat, toplamFiyat: toplamFiyat });
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
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
          <Select>Boyut Seç{err.boyut && <Warning className="test-size-warn"> *</Warning>}</Select>
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
              className="test-size-radio"
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
          <Select>Hamur Seç{err.hamur && <Warning className="test-dough-warn"> *</Warning>}</Select>
          <FormGroup>
            <Input
              name="hamur"
              value={form.hamur}
              onChange={handleChange}
              type="select"
              className="test-dough-select"
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
        <Uyari>
          En az 4 en fazla 10 malzeme seçebilirsiniz. 5₺
          {err.malzemeler && <Warning className="test-ingredient-warn"> *</Warning>}
        </Uyari>
        <Ingredients malzemeler={form.malzemeler} changeFn={handleChange} />
      </Malzemeler>

      <SiparisSection>
        <InnerDiv>
          <Select>İsim{err.isim && <Warning className="test-name-warn"> *</Warning>}</Select>
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
          </FormGroup>
        </InnerDiv>
        <hr></hr>
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
            <CounterButton className="test-artir" type="button" onClick={increase}>
              +
            </CounterButton>
          </CounterGroup>

          <StyledCard
            ekFiyat={form.ekFiyat}
            toplamFiyat={form.toplamFiyat}
            showOrderButton={true}
            isValid={isValid}
          ></StyledCard>
        </SiparisCards>
      </SiparisSection>
    </StyledForm>
  );
}

export default Container;
