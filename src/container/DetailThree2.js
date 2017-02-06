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
            <p>售前门店列表里仅展示责任销售是您或者您签约过的经纪人。</p>
            <p>如果线下业务上已经将这个经纪人分配给您，但是在销控里找不到这个经纪人，请联系销售助理在房友/OP 里将对应门店的责任销售设置为您。</p>
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
