import React from 'react';
import "./styles/Card.css"

const red = "#d62d20"; const orange = "#ffa700"; const blue = "#0057e7";
const green = "#008744"; const yellow = "#fcd12a"

const STAGES = [["Mill 1", red],  ["Mill 2", orange],  ["Turn 1", blue],  ["Turn 2", green], ["Quality", yellow]];
const colours = [red, orange, blue, green, yellow]

const  stageColours = new Map(STAGES);

const Card = (props) => {
    let item = props.item;

    let colour = stageColours.get(item.stage);
    
    return (
        <div className="item" style={{ backgroundColor: stageColours.get(item.stage) }} key={item.job_no} >
            <div className="item-dueDate">Due Date: {`${item.date}`}</div>
            <div className="item-partNo">Part No.: {`${item.part_no}`}</div>
            <div className="item-job">Job: {`${item.job_no}`}</div>
            <div className="item-customer">Customer: {`${item.customer}`}</div>
            <div className="item-stage">Stage: {`${item.stage}`}</div>
            <div className="item-screamer">Screamer: {`${item.screamer}`}</div>
            <div className="item-atRisk">At Risk: {`${item.at_risk}`}</div>
        </div>
    );
};

export default Card;
