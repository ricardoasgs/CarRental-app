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
    return (
      <React.Fragment>
        {this.props.list.length ? (
          <CarList
            list={this.props.list}
            history={this.props.history}
            rent={false}
          />
        ) : (
          <LoadingComponent />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  list: state.homeReducer.list
});

export default connect(mapStateToProps)(HomeScreen);
