import React, { Component } from "react";
import logo from "../logo.svg";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { setDirection } from "../redux/actions";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

class Direction extends Component {
  handleDirectionChange = event => {
    this.props.setDirection(event.target.value);
  };

  renderDirectionMenuItems() {
    return this.props.reduxState.currentRouteReducer.direction.map(
      (route, i) => {
        return (
          <MenuItem input={i} key={route.tag} value={route.tag}>
            {route.title}
          </MenuItem>
        );
      }
    );
  }

  render() {
    return (
      this.props.reduxState.currentRouteReducer && (
        <FormControl>
          <Select
            onChange={this.handleDirectionChange}
            input={<Input id="select-direction" />}
            value={this.props.reduxState.selectedDirection}
            inputProps={{
              id: "direction-simple"
            }}
          >
            >{this.renderDirectionMenuItems()}
          </Select>
          <FormHelperText>Direction</FormHelperText>
        </FormControl>
      )
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state
});

export default connect(mapStateToProps, {
  setDirection
})(Direction);
