/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header'
import Help from './Help'

class App extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    const {page} = this.props;
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
