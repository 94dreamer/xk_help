/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';
export default class DetailThree5 extends Component {
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
          <dt>如何新增经纪人</dt>
          <dd>
            <p>下店过程中发现该门店新来了一个经纪人，可以直接通过销控APP进行新增。</p>
            <p>在门店列表点击进入门店详情页，切换到经纪人页签，先进行搜索。如果搜索不到该经纪人，再通过【新增】进行创建。</p>
            <div>
              <img src="./src/img/351.png" alt="如何新增经纪人"/>
            </div>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
