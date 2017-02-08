/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react'

export default class Umessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.turn = this.turn.bind(this);
  }

  turn(value) {
    this.props.changePage(value);
  }

  render() {
    const {changePage}=this.props;
    return (
      <ul className="message_ul">
        <li>
          <dl className="">
            <dt>1.增加【创建门店】功能</dt>
            <dd>一线的销售人员在跑店过程中如发现系统中没有的新门店，可直接通过APP创建门店。创建后该门店的责任销售默认为当前创建用户，经理及经理级以上的用户可以通过编辑门店对责任销售进行调整。</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>2. 增加【经纪人转移】功能</dt>
            <dd>考虑到经纪人换店情况非常频繁，同时为了避免重复创建导致系统中出现大量的垃圾数据，新增了此功能。销售在拜访过程中如果发现这个经纪人从A店转到了B店，在B店内新增经纪人时，系统会自动进行校验，满足转移条件即可将该经纪人直接从A店转移到B店。<span>【其他不满足经纪人转移条件的情况，还是可以在app上进行重复创建，请知悉！】</span>
              <br/><strong>经纪人转移的条件：</strong>
              <br/>姓名和手机号同时重复 &不在同一店组&原门店和现门店的责任销售均为当前用户或当前用户的下级&没有公费开通端口。</dd>
          </dl>
        </li>
      </ul>
    )
  }
}
