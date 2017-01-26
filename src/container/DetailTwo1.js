/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';

export default class DetailOne1 extends Component {
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
          <dt>登陆账号的来源</dt>
          <dd>
            <p>销控系统登陆的账号是入职时分配的工号，如果目前还没有工号或者输入工号后无法正常登陆，请联系入职培训时的人力。</p>
            <p>目前销控系统<span className="red_span">仅支持按工号</span>进行登陆，不支持以手机号作为账号进行登陆！</p>
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
