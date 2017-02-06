/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailThree4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>如何创建门店</dt>
          <dd>
            <p>跑店过程中新开发的门店，可以直接通过销控APP进行创建。</p>
            <p>但是为了避免重复创建，请先在打卡页面进行搜索，如果搜索不到该门店，再通过【新增门店】进行创建。</p>
            <div><img src="./img/341.png" alt="如何创建门店"/></div>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
