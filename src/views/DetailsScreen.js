import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar";

class DetailsScreen extends React.Component {
  render() {
    console.log(this.props.car);
    return (
      <Container>
        <NavBar />
        <CarContainer>
          <Image />
          <Description>
            <Title>{this.props.car.model}</Title>
            <Info>{this.props.car.year}</Info>
            <Info>{this.props.car.type}</Info>
            <Info>{this.props.car.color}</Info>
            <Info>{this.props.car.price}</Info>
          </Description>
          <Footer>
            {this.props.car.avaliable ? (
              <RentButton>Alugar</RentButton>
            ) : (
              <UnavaliableButton disabled="True">
                Não Disponível
              </UnavaliableButton>
            )}
          </Footer>
        </CarContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column
  width: 100%;
  height: 100vh;
  background-color: gray;
  background-attachment: fixed;
`;

const CarContainer = styled.div`
  display: flex;
  flex: 10;
  flex-direction: column
  width: 100%;
  background-color: gray;
  background-attachment: fixed;
`;

const img =
  "http://media2.iolnegocios.pt/auto1111/124546bb3ad796940522c70aa0b92a65/800x200/";

const Image = styled.div`
  flex: 4;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column
  width: 100%;
  background-color: white;
  align-items: center;
`;

const Title = styled.span`
  text-align: center;
  font-size: 46px;
`;

const Info = styled.span`
  text-align: center;
  font-size: 26px;
`;

const Footer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: gray;
  justify-content: flex-end;
  align-items: center;
`;

const RentButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  font-size: 16px;
  background-color: #e7e7e7;
  color: black;
  width: 200px;
  text-align: center;
  text-decoration: none;
  margin-right: 30px;
`;

const UnavaliableButton = styled.button`
  border: none;
  border-radius: 12px;
  padding: 10px 24px;
  font-size: 16px;
  background-color: #f44336;
  text-align: center;
  text-decoration: none;
  width: 200px;
  color: black;
  margin-right: 30px;
`;

const mapStateToProps = state => ({
  car: state.detailReducer.car
});

export default connect(mapStateToProps)(DetailsScreen);
