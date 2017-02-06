/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailTwo3 extends Component {
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
          <dt>接收不到验证码</dt>
          <dd>
            <p><span c></span>1原因一：每个手机号一天只有5次接收验证码的机会，超出后则接收不到验证码短信。</p>
            <p>解决方法：在【全国销售管理PC/APP问题反馈】微信群中进行反馈，提供自己的手机号码后产品人员会告知您最新的短信验证码。</p>
            <p>原因二：手机号码更换，但是在销控系统中没有更新</p>
            <p>解决方法：在【全国销售管理PC/APP问题反馈】微信群中进行反馈，提供自己的工号和最新的手机号，产品人员会帮您进行处理。</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
