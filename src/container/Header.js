/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react';
export default class Header extends Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <header className="header_hd">
        <a onClick={()=>this.props.back(0)}>&lt;</a>
        <h1>入门帮助</h1>
      </header>
    )
  }
}