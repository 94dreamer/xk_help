/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailThree2 extends Component {
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
          <dt>售前-经纪人列表找不到经纪人</dt>
          <dd>
            <p>售前经纪人列表里仅展示您的责任门店中的所有经纪人和服务门店中与您签约的并且当前状态为“付费”的经纪人。</p>
            <p>如果线下业务上已经将这个经纪人分配给您，但是在销控里找不到这个经纪人，请联系销售助理在房友/OP 里将对应门店的责任销售设置为您。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
