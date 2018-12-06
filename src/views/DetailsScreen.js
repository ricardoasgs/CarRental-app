import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/NavBar";

import { createRent } from "../actions/detailAction";

const img =
  "https://www.rentacarlowcost.pt/wp-content/uploads/2016/09/mitsubishi-space-star-800x400.jpg";

class DetailsScreen extends React.Component {
  rentCar = cardId => {
    const userId = localStorage.getItem("userId");

    this.props.dispatch(
      createRent(userId, cardId, () => this.props.history.push("/rents"))
    );
  };

  render() {
    return (
      <Container>
        <NavBar />
        <DetailsContainer>
          <CarContainer>
            <Image src={img} />
            <Description>
              <Title>{this.props.car.model}</Title>
              <Info>{this.props.car.year}</Info>
              <Info>{this.props.car.type}</Info>
              <Info>{this.props.car.color}</Info>
              <Info>{this.props.car.price}</Info>
            </Description>
            <Footer>
              {this.props.car.avaliable ? (
                <RentButton onClick={() => this.rentCar(this.props.car._id)}>
                  Alugar
                </RentButton>
              ) : (
                <UnavaliableButton disabled="True">
                  Não Disponível
                </UnavaliableButton>
              )}
            </Footer>
          </CarContainer>
        </DetailsContainer>
      </Container>
    );
  }
}

const DetailsContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  min-height: 80vh 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column
  width: 100%;
  background: #fff
`;

const CarContainer = styled.div`
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  background-color: #fff;
  border-radius: 5px;
  height: 500px;
  width: 380px;
`;

const Image = styled.img`
  width: 300px
  height: 150px
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 25px;
`;

const Title = styled.h2`
  text-align: center;
  ont-weight: 600;
  font-size: 24px;
  color: #4d4c59;
`;

const Info = styled.h5`
  text-align: center;
  font-weight: normal;
  font-size: 16px;
  color: #8b8c98;
`;

const Footer = styled.div`
display: flex
justify-content: center
align-items: center`;

const RentButton = styled.button`
  text-decoration: none;
  background-color: #9381ff;
  border: 1px solid #9381ff;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
  width: 100%;
`;

const UnavaliableButton = styled.button`
  text-decoration: none;
  background-color: #f10945;
  border: 1px solid #f10945;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
  width: 100%;
`;

const mapStateToProps = state => ({
  car: state.detailReducer.car
});

export default connect(mapStateToProps)(DetailsScreen);
