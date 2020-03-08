import React, { Component } from 'react'
import Card from '../../components/Card'
import '../styles/CardContainer.css'

export default class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: this.props.orders
        }
    }

    render() {
        let orders = this.props.orders;
        let colour, borderColor;
        if (this.props.colour) {
            colour = this.props.colour[0];
            borderColor = this.props.colour[1];
        }
        return (
            <div style={{ backgroundColor: colour }} className="desk" >
                <div style={{ borderColor }} className="desk-head">
                    <div className="desk-name">Week {this.props.week} </div>
                </div>
                {orders.map((order, i) => <Card item={order} key={i} />)}
            </div>
        )
    }
}
