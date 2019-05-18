import React, { Component } from "react";
import { connect } from "react-redux";
import  { bindActionCreators }    from  'redux'

// import redux actions
import * as tokenActionCreators from  '../redux/actions/tokenActions';


class SetTable extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  componentDidMount() {
    console.log("SetTable mount")
    this.props.actions.tokenActions.setTokenData(this.props.queryData)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.queryData !== prevProps.queryData) {
      //if the redux action is fired here, things blow up
      console.log("SetTable update queryData")
      console.log("prev: ", prevProps.queryData)
      console.log("this: ", this.props.queryData)
    }
    if (this.props.queryData.length !== prevProps.queryData.length) {
      //if the redux action is fired here, things blow up
      console.log("SetTable update query length")
    }
  }

  render() {
    return (
      null
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      tokenActions : bindActionCreators(tokenActionCreators, dispatch)
    }
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

    currentBlock: state.chainUtils.currentBlock,
    tokenData: state.tokenMapping.tokenMap
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTable);
