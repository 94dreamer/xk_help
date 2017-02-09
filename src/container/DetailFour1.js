/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailFour1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>打卡失败</dt>
          <dd>
            <p className="no-indent"><strong>现象一：</strong>打卡页面空白，提示“定位失败”。</p>
            <p className="no-indent"><strong>解决方法：</strong>入门帮助-权限设置，将权限重新设置。</p>
            <p className="no-indent"><br/><strong>现象二：</strong>提示“打卡失败！请在门店100米范围内打卡”</p>
            <p className="no-indent"><strong>解决方法：</strong>请依次尝试以下操作</p>
            <p className="no-indent">1）打开GPS定位功能 <br/>
              2）点击打卡界面左下角的定位按钮，重新获取定位 <br/>
              3）重新开启4G网络 <br/>
              4）在【全国销售管理PC/APP问题反馈】微信群中进行反馈，产品人员会及时帮你处理。
            </p>
            <p className="no-indent"><strong><br/>现象三：</strong>打卡页面空白，进店打卡和出店打卡按钮都是灰色，点击无反应。</p>
            <p className="no-indent"><strong>解决方法：</strong>确认手机能正常上网即可解决这个问题</p>
          </dd>
          <dd>
            <Choose />
          </dd>
        </dl>
      </div>
    )
  }
}
