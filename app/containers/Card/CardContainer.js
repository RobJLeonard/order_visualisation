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
        console.log(orders)
        return (
            <div className="desk" >
                <div className="desk-head">
                    <div className="desk-name">Week {this.props.week} </div>
                </div>
                {orders.map((order, i) => <Card item={order} key={i} />)}
            </div>
        )
    }
}
