import React from 'react';
import "./styles/Card.css"


const Card = (props) => {
    let item = props.item;

    return (
        <div className="item" key={item.job_no} >
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
