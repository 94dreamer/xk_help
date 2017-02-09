/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react'

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.turn = this.turn.bind(this);
  }

  componentWillMount(){
    $("title").html("更新通知");
  }

  turn(value) {
    this.props.changePage(value);
  }

  render() {
    const {changePage}=this.props;
    return (
      <ul className="update_ul">
        <li>
          <dl className="home_dl">
            <dt className="dn"></dt>
            <dd className="return_dd" onClick={() => this.turn('u-1')}>销控APP 1.5.2 更新内容（2017-01-01)</dd>
          </dl>
        </li>
      </ul>
    )
  }
}
