/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';

export default class DetailThree7 extends Component {
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
          <dt>经纪人转店了，如何操作</dt>
          <dd>
            <p>跑店过程中如果发现经纪人张三由A店转到了B店，可以直接通过销控APP将张三转移到B店，对应张三之前的拜访记录等等也会跟着转到B店下。</p>
            <p>转移操作：在B店直接新增经纪人张三，系统会判断如果满足转移条件，系统会自动将其转移过去。</p>
            <p>转移条件：</p>
            <p>1.新增的经纪人与原有经纪人的姓名+电话相同</p>
            <p>2.经纪人在原门店下没有公费开通的端口</p>
            <p>4.原门店与新门店的责任销售都是当前销售</p>
          </dd>
          <dd>
            <aside className="detail_choose"><a className="icon_help_top">有用（999+）</a></aside>
            <aside><a className="icon_help_bottom">没用（12）</a></aside>
          </dd>
        </dl>
      </div>
    )
  }
}
