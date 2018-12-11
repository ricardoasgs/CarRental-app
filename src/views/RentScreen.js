import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getRents } from "../actions/homeAction";
import CarList from "../components/CarList";
import LoadingComponent from "../components/Loading";
import AppContainer from "../components/AppContainer";

class RentScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRents(localStorage.getItem("userId")));
  }

  render() {
    return (
      <AppContainer>
        {this.props.rentList.length ? (
          <CarList
            list={this.props.rentList}
            history={this.props.history}
            rent={true}
          />
        ) : (
          <LoadingComponent />
        )}
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  rentList: state.homeReducer.rentList,
  user: state.loginReducer.user
});

export default connect(mapStateToProps)(RentScreen);
