import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getCars } from "../actions/homeAction";
import CarList from "../components/CarList";
import LoadingComponent from "../components/Loading";
import AppContainer from "../components/AppContainer";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(getCars());
  }

  render() {
    return (
      <AppContainer>
        {this.props.list.length ? (
          <CarList
            list={this.props.list}
            history={this.props.history}
            rent={false}
          />
        ) : (
          <LoadingComponent />
        )}
      </AppContainer>
    );
  }
}

const mapStateToProps = state => ({
  list: state.homeReducer.list
});

export default connect(mapStateToProps)(HomeScreen);
