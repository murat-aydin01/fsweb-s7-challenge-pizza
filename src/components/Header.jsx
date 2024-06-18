import styled from "styled-components";
import teknolojikYemekler from "../assets/teknolojikYemekler.svg";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const HeaderSec = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 207px;
  width: 100%;
  background: #ce2829;
  border-bottom: 1px solid #c20608;
  box-shadow: 0px 9px 150px -30px rgba(0, 0, 0, 0.09);
`;

const Img = styled.img`
  width: 361.93px;
  height: 45.79px;
  margin-top: 66px;
`;
const Container = styled.div`
  height: 30px;
  width: 600px;
  margin-bottom: 21px;
  color:white;
  
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <HeaderSec>
      <Img src={teknolojikYemekler} />
      <Container>
        <nav>
        <StyledLink to="/" active={location.pathname === '/'}>Ana Sayfa</StyledLink>
        <span> - </span>
        <StyledLink to="/order" active={location.pathname === '/order'}>Sipariş Oluştur</StyledLink>
        </nav>
      </Container>
    </HeaderSec>
  );
}
