/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Help from './Help'

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const {page} = this.props;
    let page=0;
    return (
      <div>
        <Header />
        {page===0?<Help />:null}
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