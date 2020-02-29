import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { setRoute, routeFetch } from "../redux/actions";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

class Line extends Component {
  handleLineChange = event => {
    this.props.setRoute(event.target.value);
    this.props.routeFetch(event.target.value); //have to get the direction routes, could be done in reducer
  };

  renderRouteMenuItems() {
    //this is getting the route data, and rendering it as options
    return this.props.reduxState.routeData.map(route => {
      return (
        <MenuItem key={route.tag} value={route.tag}>
          {route.title}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      <FormControl>
        <Select
          onChange={this.handleLineChange}
          value={this.props.reduxState.selectedRoute}
          inputProps={{ name: "route", id: "route-simple" }}
          placeholder="Route"
          style={{ minWidth: "100px" }}
        >
          {this.renderRouteMenuItems()}
        </Select>
        <FormHelperText>Line</FormHelperText>
      </FormControl>
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state
});

export default connect(mapStateToProps, {
  routeFetch,
  setRoute
})(Line);
