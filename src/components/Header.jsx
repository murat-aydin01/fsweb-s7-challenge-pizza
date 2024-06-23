import styled from "styled-components";
import teknolojikYemekler from "../assets/teknolojikYemekler.svg";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const HeaderSec = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  min-height:150px;
  width: 100%;
  background: #ce2829;
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
  font-weight: ${props => (props.$active ? 'bold' : 'normal')};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  const location = useLocation()
  return (
    <HeaderSec>
      <Img src={teknolojikYemekler} />
      {location.pathname =="/order" && <Container>
        <nav>
        <StyledLink to="/" $active={location.pathname === '/'}>Ana Sayfa</StyledLink>
        <span> - </span>
        <StyledLink to="/order" $active={location.pathname === '/order'}>Sipariş Oluştur</StyledLink>
        </nav>
      </Container>}
    </HeaderSec>
  );
}
