import React, {Component} from 'react';
import logo from '../logo.svg';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import {
    selectedRoute,
    selectStop,
    routeFetch,
    selectDirection
} from '../redux/actions'
import Input from '@material-ui/core/Input';
import PredictionBox from '../components/PredictionBox'
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import _ from 'lodash';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: "",
            stop: "",
            direction: ""
        };
    }


    handleChange = event => {
        this.setState({
            route: event.target.value
        });
        this.props.selectedRoute(event.target.value)
        this.props.routeFetch(event.target.value)
    };

    handleDirectionChange = event => {
        this.setState({
            direction: event.target.value
        });
        if (this.props.reduxState.currentRouteReducer.direction.length === 2) {
            if (event.target.value === 'North') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[1])
            }
            if (event.target.value === 'East') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[1])
            }
            if (event.target.value === 'South') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[0])
            }
            if (event.target.value === 'West') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[0])
            }
        }
        if (this.props.reduxState.currentRouteReducer.direction.length === 4) {
            if (event.target.value === 'North') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[1])
            }
            if (event.target.value === 'East') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[1])
            }
            if (event.target.value === 'South') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[0])
            }
            if (event.target.value === 'West') {
                this.props.selectDirection(this.props.reduxState.currentRouteReducer.direction[0])
            }
        }

    };

    handleCurrentRouteChange = event => {
        this.setState({
            stop: event.target.value
        });
        this.props.selectStop(this.props.reduxState.currentRouteReducer.tag, event.target.value)
    };



    renderRouteMenuItems() {
        return this.props.reduxState.routeData.map((route) => {
            return (<MenuItem key={route.tag} value={route.tag}>{route.title}</MenuItem>)
        })
    }
    renderDirectionMenuItems() {
        return this.props.reduxState.currentRouteReducer.direction.map((route, i) => {
            return (<MenuItem key={route.tag} input={i} value={route.name}>{route.title}</MenuItem>)
        })
    }



    renderStopMenuItems() {
        let directionStopsNoTags = this.props.reduxState.selectDirection.payload.stop;
        let allStopsNoDirection = this.props.reduxState.currentRouteReducer.stop

        var filteredStops = _(allStopsNoDirection)
            .differenceBy(directionStopsNoTags, 'tag')
            .map(_.partial(_.pick, _, 'tag', 'title'))
            .value();


        return filteredStops.map((stop) => {
            return (<MenuItem key={stop.tag} value={stop.tag}>{stop.title}</MenuItem>)
        })
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
                        {this.state.route === "" ? "To begin, choose your Route" : 
                        this.state.direction === "" ? "Next Choose your direction" :
                        this.state.stop === "" ? "Finally Choose your Stop" :
                        null }
                    </p>
                <FormControl>
                    <Select 
                        onChange={this.handleChange} 
                        value={this.state.route} 
                        inputProps={{name: 'route', id: 'route-simple'}}>
                        {this.renderRouteMenuItems()}
                    </Select>
                    <FormHelperText>Line</FormHelperText>
                </FormControl >
                {this.props.reduxState.currentRouteReducer ? 
                <FormControl>
                    <Select 
                        onChange={this.handleDirectionChange} 
                        input={<Input id="select-direction" />} 
                        value={this.state.direction}
                        inputProps={{name: 'direction', id: 'direction-simple'}}>
                    >
                        {this.renderDirectionMenuItems()}
                    </Select> 
                    <FormHelperText>Direction</FormHelperText>
                </FormControl >
                :
                null
                }    
                <br/>
                { this.props.reduxState.selectDirection.payload ? 
                <FormControl>
                    <Select onChange={this.handleCurrentRouteChange} value={this.state.stop} inputProps={{name: 'stop', id: 'stop-simple'}}>
                {this.props.reduxState.selectDirection.payload ? this.renderStopMenuItems() : null}
                    </Select>
                    <FormHelperText>Stop</FormHelperText>
                </FormControl>
                : null
                }
                <br/>
                {this.props.reduxState.selectedStop ? <PredictionBox predictions={this.props.reduxState.selectedStop ? this.props.reduxState.selectedStop : this.props.reduxState.stopPrediction.predictions} /> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    reduxState: state
})

// const mapDispatchToProps = (dispatch) => ({
//     selectedRoute: (text) => { dispatch({ type: 'SELECT_ROUTE', payload: text})},
//   })

export default connect(mapStateToProps, {routeFetch,selectStop,selectedRoute,selectDirection})(Home)