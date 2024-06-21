import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const ingredients = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Sucuk(Acı)"
  ];
function Ingredients() {
  return (
    <Row>
      {ingredients.map((item, index) => (
        <Col sm="4" key={index}>
          <FormGroup check>
            <Input
              id={item}
              type="checkbox"
            />
            {' '}
            <Label check for={item}>
              {item}
            </Label>
          </FormGroup>
        </Col>
      ))}
    </Row>
  )
}

export default Ingredients