import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardHeader, CardTitle, Container, Button } from "reactstrap";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { MinusCircle, PlusCircle } from "react-feather";
//expandRow={expandRow}

const piggyColumns = [
  {
    dataField: "tokenId",
    text: "piggy #",
    sort: true
  },
  {
    dataField: "isEuro",
    text: "Style",
    sort: true
  },
  {
    dataField: "isPut",
    text: "Put/Call",
    sort: true
  },
  {
    dataField: "strike",
    text: "Strike Price",
    sort: true
  },
  {
    dataField: "collateral",
    text: "Collateral",
    sort: true
  },
  {
    dataField: "lotSize",
    text: "Multiplier",
    sort: true
  },
  {
    dataField: "expiryBlock",
    text: "Maturity",
    sort: true
  },
  {
    dataField: "auctionPrice",
    text: "Price",
    sort: true
  },
  {
    dataField: "auctionExpiry",
    text: "Auction Expiry",
    sort: true
  }
];

function handleDAI() {
  // spawn a modal and ask for an address

  // add that address into this URL string: https://verify.testwyre.com/widget/v1?env=test&operation=debitcard&accountId=AC_1234&authType=metamask&destCurrency=DAI&sourceCurrency=USD&sourceAmount=0.01&dest=ethereum:0x4f5d52710C8C3E23e4c44f678868d23Aa2a49B37&redirectUrl=https://sendwyre.com

  // open the modified URL w/ user-supplied ethereum address to send DAI to
}

class PiggyTable extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount() {

  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.piggies !== prevProps.piggies) {

    }
  }

  render() {
    let displayPiggies = this.props.piggies

    let displayData
    if (this.props.putOnly) {
      displayData = displayPiggies.filter(row => row.isPut === "put")
    }
    if (this.props.callOnly) {
      displayData = displayPiggies.filter(row => row.isPut === "call")
    }
    if (this.props.directionAll) {
      displayData = displayPiggies
    }

    return (

      <Card>
        <CardHeader>
          <CardTitle tag="h5">Piggies From Graph</CardTitle>
          <div style={{float: 'left'}}>
            <h6 className="card-subtitle text-muted">
              Filter Piggies using the controls on the left
            </h6>
          </div>
          <div style={{float: 'right'}}>
            <Button color={'primary'} className="mr-1 mb-1" onClick={() => window.open('https://verify.testwyre.com/widget/v1?env=test&operation=debitcard&accountId=AC_1234&authType=metamask&destCurrency=DAI&sourceCurrency=USD&sourceAmount=0.01&dest=ethereum:0x4f5d52710C8C3E23e4c44f678868d23Aa2a49B37&redirectUrl=https://sendwyre.com', '_blank')}>Need DAI? Click Here</Button>
          </div>
        </CardHeader>
        <CardBody>
        <BootstrapTable
          bootstrap4
          bordered={false}
          keyField="id"
          data={displayData}
          columns={piggyColumns}

          pagination={paginationFactory({
            sizePerPage: 5,
            sizePerPageList: [5, 10, 25, 50]
          })}
        />
        </CardBody>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  return {
    auctionAll: state.filters.isAuctionAll,
    forSale: state.filters.isAuctionForSale,
    notForSale: state.filters.isAuctionNotForSale,

    directionAll: state.filters.isPutCallAll,
    putOnly: state.filters.isPutOnly,
    callOnly: state.filters.isCallOnly,

    expiryAll: state.filters.isExpiryAll,
    onlyExpired: state.filters.isExpiredOnly,
    notExpired: state.filters.isNotExpired,
  }
}

export default connect(mapStateToProps, null)(PiggyTable);
