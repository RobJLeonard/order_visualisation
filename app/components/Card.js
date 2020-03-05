import React from 'react';
import TrafficLight from './TrafficLight'
import './styles/Card.css'

const red = "#d62d20"; const orange = "#ffa700"; const blue = "#0057e7";
const green = "#008744"; const yellow = "#fcd12a"

const STAGES = [["Mill 1", red], ["Mill 2", orange], ["Turn 1", blue], ["Turn 2", green], ["Quality", yellow]];
const colours = [red, orange, blue, green, yellow]

const stageColours = new Map(STAGES);

const Card = (props) => {
    let item = props.item;

    let colour = "#99c140"

    if(item.at_risk == "y")
        colour = "#db7b2b";
    if(item.screamer == "y") 
        colour = "#cc3232";

    return (
        <div className="item" style={{ backgroundColor: stageColours.get(item.stage) }} key={item.job_no} >
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
                    <div className="item-stage">Stage: {`${item.stage}`}</div>
                </div>
            </div>


        </div>
    );
};

export default Card;
