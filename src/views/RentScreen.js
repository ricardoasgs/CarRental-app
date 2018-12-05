import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getRents } from "../actions/homeAction";
import CarList from "../components/CarList";
import LoadingComponent from "../components/Loading";
import NavBar from "../components/NavBar";

class RentScreen extends React.Component {
  componentDidMount() {
    console.log(localStorage.getItem("userId"));
    this.props.dispatch(getRents(localStorage.getItem("userId")));
  }

  render() {
    return (
      <Container>
        <NavBar />
        <CarContainer>
          {this.props.rentList.length ? (
            <CarList
              list={this.props.rentList}
              history={this.props.history}
              type="rent"
            />
          ) : (
            <LoadingComponent />
          )}
        </CarContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: gray;
  background-attachment: fixed;
`;

const mapStateToProps = state => ({
  rentList: state.homeReducer.rentList,
  user: state.loginReducer.user
});

export default connect(mapStateToProps)(RentScreen);
