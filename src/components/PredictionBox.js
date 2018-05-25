import React, { Component } from 'react';

class PredictionBox extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
      }

renderPredictions(){
    return this.props.predictions.direction.prediction.map((bus, i) => {
        return(
        <div className="Card-main"  key={bus.tripTag} value={bus.tripTag}>
            <div className="Col-left">
                <div className="Card-route"> {this.props.predictions.routeTag}</div> 
                <div className="Card-stop"> {this.props.predictions.direction.title} </div>
                <div className="Card-agency"> {this.props.predictions.agencyTitle} </div>
            </div>
            <div className="Col-right">
                {bus.minutes < 1 ? 
                <div className="Card-time" > {bus.seconds} <div className="Card-time-unit"> Seconds </div>  </div> : 
                <div className="Card-time"> {bus.minutes} <div className="Card-time-unit"> Minutes </div> </div>
                }
            </div>
        </div>
        );
    }); 

}

    render(){
        const {predictions} = this.props;
        return(
            <div style={{marginTop: "20px"}}>
                {predictions.stopTitle}
                <br />
                { this.props.predictions.direction.prediction ? this.renderPredictions() : <div> No Routes Available</div>}
            </div>
        );
    }

    }
    
export default PredictionBox;