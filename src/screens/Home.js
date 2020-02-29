import React, { Component } from "react";
import logo from "../logo.svg";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { setRoute, setStop, routeFetch, setDirection } from "../redux/actions";
import Input from "@material-ui/core/Input";
import PredictionBox from "../components/PredictionBox";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import _ from "lodash";
import Line from "../components/Line";
import Direction from "../components/Direction";
import Stop from "../components/Stop";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stop: ""
    };
  }

  handleCurrentRouteChange = event => {
    this.setState({
      stop: event.target.value
    });
    this.props.setStop(
      this.props.reduxState.currentRouteReducer.tag,
      event.target.value
    );
  };

  renderPrediction() {
    return (
      this.props.reduxState.selectedStop && (
        <PredictionBox
          predictions={
            this.props.reduxState.selectedStop
              ? this.props.reduxState.selectedStop
              : this.props.reduxState.stopPrediction.predictions
          }
        />
      )
    );
  }

  render() {
    return (
      <div className="App">
        <div className="Content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">METROLINX</h1>
          </header>
          <p className="App-intro">
            {this.props.reduxState.selectedRoute === ""
              ? "To begin, choose your Route"
              : this.props.reduxState.selectedDirection === ""
              ? "Next Choose your direction"
              : this.props.reduxState.selectedStop === ""
              ? "Finally Choose your Stop"
              : null}
          </p>
          <Line />
          <br />
          <Direction />
          <br />
          <Stop
            stop={this.state.stop}
            handleCurrentRouteChange={this.handleCurrentRouteChange}
          />
          <br />
          {this.renderPrediction()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state
});

// const mapDispatchToProps = (dispatch) => ({
//     selectedRoute: (text) => { dispatch({ type: 'SELECT_ROUTE', payload: text})},
//   })

export default connect(mapStateToProps, {
  routeFetch,
  setStop,
  setRoute,
  setDirection
})(Home);
