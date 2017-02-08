/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailThree3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>经纪人没有头像</dt>
          <dd>
            <p>只有付费且通过了【经纪人后台-诚信通审核】的经纪人才会展示头像。</p>
            <p>如果经纪人是付费状态，但没有头像，请及时提醒经纪人提交诚信通审核。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
