/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import Help from './Help';
import DetailOne1 from  './DetailOne1';
import DetailOne2 from  './DetailOne2';
import DetailTwo1 from './DetailTwo1';
import DetailTwo2 from './DetailTwo2';
import DetailTwo3 from './DetailTwo3';
import DetailThree1 from './DetailThree1';
import DetailThree2 from './DetailThree2';
import DetailThree3 from './DetailThree3';
import DetailThree4 from './DetailThree4';
import DetailThree5 from './DetailThree5';
import DetailThree6 from './DetailThree6';
import DetailThree7 from './DetailThree7';
import DetailThree8 from './DetailThree8';
import DetailFour1 from './DetailFour1';
import DetailFour2 from './DetailFour2';
import DetailFour3 from './DetailFour3';
import DetailFour4 from './DetailFour4';
import DetailFour5 from './DetailFour5';
import DetailFive1 from './DetailFive1';
import DetailFive2 from './DetailFive2';
import Update from './Update';
import Umessage from './Umessage';
import Umessage2 from './Umessage2';
import NotFound from './NotFound';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.changePage = this.changePage.bind(this);
    this.pageList = {
      "0": <Help changePage={this.changePage}/>,
      "1-1": <DetailOne1 />,
      "1-2": <DetailOne2 />,
      "2-1": <DetailTwo1 />,
      "2-2": <DetailTwo2 />,
      "2-3": <DetailTwo3 />,
      "3-1": <DetailThree1 />,
      "3-2": <DetailThree2 />,
      "3-3": <DetailThree3 />,
      "3-4": <DetailThree4 />,
      "3-5": <DetailThree5 />,
      "3-6": <DetailThree6 />,
      "3-7": <DetailThree7 />,
      "3-8": <DetailThree8 />,
      "4-1": <DetailFour1/>,
      "4-2": <DetailFour2/>,
      "4-3": <DetailFour3/>,
      "4-4": <DetailFour4/>,
      "4-5": <DetailFour5/>,
      "5-1": <DetailFive1 />,
      "5-2": <DetailFive2 />,
      "update": <Update changePage={this.changePage}/>,
      "u-1": <Umessage />,
      "u-2": <Umessage2 />,
      "NotFound":<NotFound />
    }
  }

  changePage(guid_id) {
    console.log(guid_id);

    if (process.env.NODE_ENV === "development") {
      this.props.dispatch({
        type: "CHANGE_PAGE",
        guid_id: guid_id
      })
    } else {
      window.location.href = window.changeURLPar(window.location.href, "guid_id", guid_id);
    }
  }

  render() {
    console.log(process.env.NODE_ENV);
    const {guid_id, dispatch} = this.props;
    return (
      <div>
        {process.env.NODE_ENV === "development" ? <Header back={this.changePage} guid_id={guid_id}/> : null}
        {this.pageList[guid_id]?this.pageList[guid_id]:this.pageList["NotFound"]}
      </div>
    )
  }
}

function select(state) {
  return {
    guid_id: state.guid_id
  }
}

export default connect(select)(App);
