/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailFour4 extends Component {
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
          <dt>如何批量添加客户培训类的拜访记录</dt>
          <dd>
            <p>左滑门店-添加拜访-选择【经纪人拜访记录】，拜访详情选择【客户培训】即可</p>
            <div><img src={`${window.resurl}/src/img/441.png`} alt="如何通过销控APP直接给经纪人打电话或发短信"/></div>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
