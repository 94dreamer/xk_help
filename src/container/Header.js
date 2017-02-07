/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.back = this.back.bind(this);
  }

  back() {
    if (this.props.guid_id == 0) {
      window.close();
    } else {
      this.props.back(0)
    }
  }

  render() {
    return (
      <header className="header_hd">
        <a onClick={this.back}>&lt;</a>
        <h1>入门帮助</h1>
      </header>
    )
  }
}