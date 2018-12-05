import React from "react";
import styled from "styled-components";
import Car from "./Car";
import CarRent from "./CarRent";

export default props => {
  const renderCard = () => {
    const list = props.list || [];
    return list.map(car => (
      <CardItem key={car._id}>
        {props.type === "rent" ? (
          <CarRent car={car} history={props.history} />
        ) : (
          <Car car={car} history={props.history} />
        )}
      </CardItem>
    ));
  };

  return <Container>{renderCard()}</Container>;
};

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-left: 10px;
`;

const CardItem = styled.li`
  display: flex;
  padding: 1rem;
  width: 280px;
`;
