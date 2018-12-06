import React from "react";
import styled from "styled-components";
import Car from "./Car";

export default props => {
  const renderCard = () => {
    const list = props.list || [];
    return list.map(item => (
      <CardItem key={item._id}>
        {props.rent ? (
          <Car rent={item} history={props.history} />
        ) : (
          <Car car={item} history={props.history} />
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
  height: 240px;
`;
