/**
 * Created by zhouzhen on 2017/1/22.
 */
import React, {Component} from 'react';

export default class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {data}=this.props;
    return (
      <div className="choose_box clearfix">
        <aside className="detail_choose"><a className="icon_help_top">有用 （999+）</a></aside>
        <aside ><a className="icon_help_bottom">没用 （12）</a></aside>
      </div>
    )
  }
}

