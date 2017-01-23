/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';

export default class DetailOne1 extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <div>
        <dl className="detail_dl">
          <dt>IOS系统-信任销控APP</dt>
          <dd>
            <h4>第一步 进入设置页面，点击【通用】</h4>
            <div><img src={'../img/111.png'} alt=""/></div>
          </dd>
          <dd>
            <h4>第二步 进入通用页面，点击【设备管理】</h4>
            <div><img src="./src/img/112.png" alt=""/></div>
          </dd>
          <dd>
            <h4>第三步 进入设备管理页面，点击【信任】</h4>
            <div><img src="./src/img/113.png" alt=""/></div>
          </dd>
          <dd>
            <h4>第四步 显示【已验证】</h4>
            <div><img src="../src/img/114.png" alt=""/></div>
          </dd>
        </dl>
        <dl className="detail_dl">
          <dt>IOS系统-权限设置</dt>
          <dd>
            <h4>第一步 进入设置页面，点击【销售管理】 </h4>
            <div><img src="./src/img/115.png" alt=""/></div>
          </dd>
          <dd>
            <h4>第二步 按照下图进行权限设置 </h4>
            <div><img src="./src/img/116.png" alt=""/></div>
          </dd>
        </dl>
      </div>
    )
  }
}
