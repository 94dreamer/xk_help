/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailTwo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>登录账号的来源</dt>
          <dd>
            <p>销控系统登录的账号是入职时分配的工号，如果目前还没有工号或者输入工号后无法正常登录，请联系入职培训时的人力资源部同事。</p>
            <p>目前销控系统<span className="red_span">仅支持按工号</span>进行登录，不支持以手机号作为账号进行登录！</p>
          </dd>
          <dd>
            <Choose/>
          </dd>
        </dl>
      </div>
    )
  }
}
