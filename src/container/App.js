/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import Help from './Help';
import DetailOne1 from  './DetailOne1';
class App extends Component{
  constructor(props){
    super(props);
    this.state={}
    this.pageList={
      0:<Help />,
      11:<DetailOne1 />
    }
  }

  render(){
    const {page} = this.props;
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
    page:state.page
  }
}

export default connect(select)(App);
