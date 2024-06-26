import { Col, FormGroup, Input, Label, Row } from "reactstrap";

export const ingredients = [
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
function Ingredients(props) {
  const {changeFn, malzemeler} = props;
  return (
    
    <Row>
      {ingredients.map((item, index) => (
        <Col sm="4" key={index}>
          <FormGroup check>
            <Input
              id={item}
              value={item}
              type="checkbox"
              name="malzemeler"
              checked={malzemeler.includes(item)}
              onChange={changeFn}
              className="test-ingredient-checkbox"
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