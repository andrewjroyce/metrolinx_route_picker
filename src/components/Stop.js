import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { setStop } from "../redux/actions";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import _ from "lodash";

class Stop extends Component {
  renderStopMenuItems() {
    let allStopsNoDirection = this.props.reduxState.currentRouteReducer.stop;
    let currentRoute = this.props.reduxState.currentRouteReducer.direction;
    let directionTags;

    currentRoute.forEach(dir => {
      if (dir.tag === this.props.reduxState.selectedDirection) {
        directionTags = dir.stop;
      }
    });

    var filteredStops = _(allStopsNoDirection)
      .differenceBy(directionTags, "tag")
      .value();

    var result = allStopsNoDirection.filter(function(o1) {
      return !filteredStops.some(function(o2) {
        return o1.tag === o2.tag; // assumes unique tag
      });
    });

    return result.map(stop => {
      return (
        <MenuItem key={stop.tag} value={stop.tag}>
          {stop.title}
        </MenuItem>
      );
    });
  }

  render() {
    return (
      this.props.reduxState.selectedDirection && (
        <FormControl>
          <Select
            onChange={this.props.handleCurrentRouteChange}
            value={this.props.stop}
            inputProps={{ name: "stop", id: "stop-simple" }}
          >
            {this.props.reduxState.routeData && this.renderStopMenuItems()}
          </Select>
          <FormHelperText>Stop</FormHelperText>
        </FormControl>
      )
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state
});

export default connect(mapStateToProps, {
  setStop
})(Stop);
