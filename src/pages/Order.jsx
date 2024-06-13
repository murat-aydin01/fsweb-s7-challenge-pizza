import styled from "styled-components"
import Header from "../components/Header"

const Container = styled.div`
width:600px;
height:800px;
margin-right:auto;
margin-left:auto;
padding:0px;
display:flex;
border:1px, solid, red;
`

function Order() {
  return (
    <>
    <Header/>
    <Container/>
    </>
  )
}

export default Order
