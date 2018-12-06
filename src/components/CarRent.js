import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { finalizeRent } from "../actions/detailAction";

class Car extends Component {
  finalizeRent = id => {
    this.props.dispatch(finalizeRent(id));
  };

  render() {
    return this.props.car ? (
      <Card>
        <CardImage />
        <CardContent>
          <CardTitle>{this.props.car.car.model || ""}</CardTitle>
          {this.props.car.active ? (
            <CardButton onClick={() => this.finalizeRent(this.props.car._id)}>
              Realizar Devolução
            </CardButton>
          ) : (
            <CardButton disabled="True">Devolvido</CardButton>
          )}
        </CardContent>
      </Card>
    ) : null;
  }
}

const img =
  "https://www.rentacarlowcost.pt/wp-content/uploads/2016/09/mitsubishi-space-star-800x400.jpg";

const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 280px;
  height: 240px;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

const CardTitle = styled.div`
  color: #3c4859;
  font-size: 1.15rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
`;

const CardImage = styled.div`
  background-image: url(${img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  height: 20vh;
`;

const CardButton = styled.button`
  text-decoration: none;
  background-color: #9381ff;
  border: 1px solid #9381ff;
  color: white;
  padding: 0.5rem;
  text-transform: uppercase;
  align-items: center;
  display: block;
  width: 100%;
`;

export default connect(null)(Car);
