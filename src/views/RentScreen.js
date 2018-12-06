import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getRents } from "../actions/homeAction";
import CarList from "../components/CarList";
import LoadingComponent from "../components/Loading";
import NavBar from "../components/NavBar";

class RentScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getRents(localStorage.getItem("userId")));
  }

  render() {
    return (
      <React.Fragment>
        {this.props.rentList.length ? (
          <CarList
            list={this.props.rentList}
            history={this.props.history}
            rent={true}
          />
        ) : (
          <LoadingComponent />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  rentList: state.homeReducer.rentList,
  user: state.loginReducer.user
});

export default connect(mapStateToProps)(RentScreen);
