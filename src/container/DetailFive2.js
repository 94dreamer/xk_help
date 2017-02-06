/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailFive2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  changeType(type) {
    console.log(type)
    this.setState({})
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>查看业绩完成情况</dt>
          <dd>
            <p>在首页-本月业绩完成情况，即可查看业绩完成情况。这里的数据都是截止昨天的数据，不包含今天。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
