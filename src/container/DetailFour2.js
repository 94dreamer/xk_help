/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailFour2 extends Component {
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
          <dt>添加拜访记录时无法选择【到店】拜访</dt>
          <dd>
            <p>打卡当天能选择【到店】拜访，过了凌晨12点就只能算作【电话】拜访。</p>
            <p>建议大家拜访完经纪人后立即添加拜访记录。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
