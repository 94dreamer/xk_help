/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react'

export default class Umessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.turn = this.turn.bind(this);
  }

  componentWillMount(){
    $("title").html("销控APP1.5.1更新内容");
  }

  turn(value) {
    this.props.changePage(value);
  }

  render() {
    const {changePage}=this.props;
    return (
      <ul className="message_ul">
        <li>
          <dl className="">
            <dt>一  地图优化</dt>
            <dd>1.门店地图：在区域和板块级别展示门店数量，板块级别以下展示明细门店。点击门店，可左划加入日程，方便大家按门店位置安排计划。
              <br/>2.日程地图：经理及经理以上级别查看分组和部门数据时，在区域和板块级别展示门店数量，板块级别以下展示明细门店。
              <img src={`${window.resurl}/src/img/1.5.2-1.png`} alt=""/>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>二  打卡页面添加-门店人数</dt>
            <dd>现系统中存在大量重复的门店，为了防止打卡时选错门店，新增此功能，便于大家区分。
              <img src={`${window.resurl}/src/img/1.5.2-2.png`} alt=""/>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>三  新增【我的】界面</dt>
            <dd>1.更新通知：展示每个新版本的更新内容。
              <br/>2.入门帮助：常见问题处理方案。
              <br/>3.意见反馈：使用过程中的操作咨询、BUG或优化建议。
            </dd>
          </dl>
        </li>
      </ul>
    )
  }
}
