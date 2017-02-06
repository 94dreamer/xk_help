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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.changePage = this.changePage.bind(this);
    this.pageList = {
      0: <Help changePage={this.changePage}/>,
      11: <DetailOne1 />,
      12: <DetailOne2 />,
      21: <DetailTwo1 />,
      22: <DetailTwo2 />,
      23: <DetailTwo3 />,
      31: <DetailThree1 />,
      32: <DetailThree2 />,
      33: <DetailThree3 />,
      34: <DetailThree4 />,
      35: <DetailThree5 />,
      36: <DetailThree6 />,
      37: <DetailThree7 />,
      38: <DetailThree8 />,
      41: <DetailFour1/>,
      42: <DetailFour2/>,
      43: <DetailFour3/>,
      44: <DetailFour4/>,
      45: <DetailFour5/>,
      51: <DetailFive1 />,
      52: <DetailFive2 />
    }
  }

  changePage(page) {
    console.log(this, page);
    this.props.dispatch({
      type: "CHANGE_PAGE",
      page: page
    })
  }

  render() {
    const {page, dispatch} = this.props;
    return (
      <div>
        <Header />
        {this.pageList[page]}
      </div>
    )
  }
}

function select(state) {
  return {
    page: state.page
  }
}

export default connect(select)(App);
