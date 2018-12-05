import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCars } from "../actions/homeAction";
import CarList from "../components/CarList";
import LoadingComponent from "../components/Loading";
import NavBar from "../components/NavBar";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCars());
  }

  render() {
    console.log(this.props.list);
    return (
      <Container>
        <NavBar />
        <CarContainer>
          {this.props.list.length ? (
            <CarList list={this.props.list} history={this.props.history} />
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
  list: state.homeReducer.list
});

export default connect(mapStateToProps)(HomeScreen);