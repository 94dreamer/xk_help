/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import Help from './Help';
import DetailOne1 from  './DetailOne1';
import DetailOne2 from  './DetailOne2';
class App extends Component{
  constructor(props){
    super(props);
    this.state={}
    this.changePage=this.changePage.bind(this);
    this.pageList={
      0:<Help changePage={this.changePage} />,
      11:<DetailOne1 />,
      12:<DetailOne2 />
    }
  }

  changePage(page){
    console.log(this,page);
    this.props.dispatch({
      type:"CHANGE_PAGE",
      page:page
    })
  }

  render(){
    const {page,dispatch} = this.props;
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
