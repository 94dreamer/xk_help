/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailThree8 extends Component {
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
          <dt>如何添加门店拜访日程</dt>
          <dd>
            <p>在售前-门店列表左滑-添加日程，录入拜访时间、目的等信息即可。</p>
            <p>如果在拜访过程中预约了下次拜访，可以直接在经纪人拜访记录中添加下次跟进的时间，这样系统会自动生成一条日程。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
