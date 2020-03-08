import React from 'react';
import TrafficLight from './TrafficLight'
import './styles/Card.css'

const red = "#ffc3bb"; const orange = "#ffe2bf"; const blue = "#d1e4ff";
const green = "#e4ffb9"; const yellow = "#ffffb1"; const mint = "#c1ffe1";
const turquoise = "#ccfffe";

const STAGES = [["not started", red], ["turn", orange], ["mill", orange], ["heat treat", yellow], ["plater", yellow],
["plating", yellow], ["assembly", green], ["receiving", mint], ["quality", turquoise], ["stock", blue]];

let stageColours = new Map(STAGES);

const Card = (props) => {
    let item = props.item;

    let colour = "#99c140"

    if (item.at_risk == "y")
        colour = "#db7b2b";
    if (item.screamer == "y")
        colour = "#cc3232";

    let stageString = item.stage.toLowerCase().trim();
    let cardColour = stageColours.get(stageString);

    return (
        <div className="item" style={{ backgroundColor: cardColour }} key={item.job_no} >
            <div className="item-customer-container">
                <div className="item-customer">{`${item.customer}`}</div>
            </div>
            <div className="item-info-fields">
                <div className="item-info-left">
                    <div className="item-partNo">{`${item.part_no}`}</div>
                    <div className="item-order">Order: {`${item.order_no}`}</div>
                </div>
                <div className="item-info-right">
                    <div className="item-quantity">Quantity: {`${item.quantity}`}</div>
                    <div className="item-dueDate">Due: {`${item.date}`}</div>
                </div>
            </div>
            <div className="item-bottom-info">
                <div className="item-traffic-light">
                    {/*<div className="item-screamer">Screamer: {`${item.screamer}`}</div>
                    <div className="item-atRisk">At Risk: {`${item.at_risk}`}</div>*/}
                    <TrafficLight colour={colour}></TrafficLight>
                </div>
                <div>
                    <div className="item-job">Job: {`${item.job_no}`}</div>
                    <div className="item-stage">Stage: {`${item.stage.toUpperCase()}`}</div>
                </div>
            </div>


        </div>
    );
};

export default Card;
