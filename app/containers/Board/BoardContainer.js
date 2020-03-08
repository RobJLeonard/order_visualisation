import React, { Component, useRef, useEffect } from 'react'
import { CSVReader } from 'react-papaparse'
import CardContainer from '../Card/CardContainer'
import '../styles/CardContainer.css'
import getWeekNo, { formatDate } from '../../utils/weekNo'


const config = {
  delimiter: ",",
  header: true,
  newline: "\r\n",
  skipEmptyLines: true
}

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);
    // this.findList = this.findList.bind(this);
    // this.scrollRight = this.scrollRight.bind(this);
    // this.scrollLeft = this.scrollLeft.bind(this);
    // this.stopScrolling = this.stopScrolling.bind(this);
    // this.startScrolling = this.startScrolling.bind(this);
    this.state = { isScrolling: false, orders: [], weeks: [] };
    this.fileInput = React.createRef();
  }

  handleReadCSV = (data) => {
    // console.log('--------------------------------------------------')
    // console.log(data.data)
    // console.log('--------------------------------------------------')
    // //this.setState({ orders: data.data })
    this.parseToWeeks(data.data);
    this.scrollToMyRef();
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  }

  handleImportOffer = () => {
    this.fileInput.current.click();
    this.forceUpdate();
  }

  parseToWeeks = (orders) => {
    // 52 and a bit weeks in a year hence 53
    let weeks = new Array(53).fill(0).map(() => new Array());
    orders.forEach(order => {
      let orderDueDate = formatDate(order.date)
      orderDueDate = new Date(orderDueDate);
      let weekNo = getWeekNo(orderDueDate)
      if (!Number.isNaN(weekNo[1]))
        weeks[weekNo[1] - 1].push(order)
    });
    this.setState({ orders: weeks })
  }



  render() {
    let data = this.state.orders ? this.state.orders : [];
    console.log(data)
    return (
      <div>
        <CSVReader
          onFileLoaded={this.handleReadCSV}
          inputRef={this.fileInput}
          style={{ display: 'none' }}
          onError={this.handleOnError}
          configOptions={config}
        />
        <button style={{ marginLeft: 10 }} onClick={this.handleImportOffer}>Import</button>
        <div>
          <CardList orders={data} />
        </div>
      </div>
    )
  }
}


function CardList(props) {
  const myRef = useRef(null);

  const orders = props.orders;
  let listItems = [];
  let now = new Date()
  let thisWeekNo = getWeekNo(now)
  let thisWkColours = ["#5eb03c", "#457d2e"];


  for (let i = 0; i < 53; i++) {
    if (orders[i]) {
      // Highlight current week
      if ((i + 1) == thisWeekNo[1])
        listItems.push(<CardContainer ref={myRef} colour={thisWkColours} orders={orders[i]} week={i + 1} />);
      else
        listItems.push(<CardContainer orders={orders[i]} week={i + 1} />);
    }
  }

  return (
    <ul className="card-containers">{listItems}</ul>
  );
}
