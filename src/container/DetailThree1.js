/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailThree1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>售前-门店列表找不到门店</dt>
          <dd>
            <p>售前门店列表里仅展示您的责任门店和服务门店。</p>
            <p>如果线下业务上已经将这个门店分配给您，但是在销控里找不到这个门店，请联系销售助理在房友/OP 里将该门店的责任销售设置为您。</p>
            <p>如果是打过卡的门店需要填拜访记录，切换到售中-门店日程页面就可以看到该门店并且添加拜访记录了。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
