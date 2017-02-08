/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="notfound">
        <img src={`${window.resurl}/src/img/notfound.png`} alt="404"/>
      </div>
    )
  }
}