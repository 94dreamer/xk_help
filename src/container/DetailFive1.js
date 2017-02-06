/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailFive1 extends Component {
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
          <dt>查看拜访完成情况</dt>
          <dd>
            <p>在首页-拜访统计，即可查看拜访的完成情况。这里的数据是每小时50分的时候更新一次，即在下午2点半的时候看到的数据是1点50分的数据，所以会有少量的差异。其中本周和本月的数据都是截止昨天的数据，不包含今天。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
