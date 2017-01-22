/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react'

export default class Help extends Component{

  render(){
    return (
      <ul className="help_ul">
        <li>
          <dl className="home_dl">
            <dt>一 权限设置</dt>
            <dd className="return_dd">1.IOS系统权限设置 <a>&gt;</a></dd>
            <dd className="return_dd">2.安卓系统权限设置 <a>&gt;</a></dd>
            <dd>注：应用过程中80%左右的问题是由于权限不够导致的，如遇问题请先检查权限设置是否完整正确</dd>
          </dl>
        </li>
        <li>
          <dl className="home_dl">
            <dt>二 登陆</dt>
            <dd className="return_dd">1.登陆账号的来源 <a>&gt;</a></dd>
            <dd className="return_dd">2.忘记密码 <a>&gt;</a></dd>
            <dd className="return_dd">3.接收不到验证码 <a>&gt;</a></dd>
          </dl>
        </li>
        <li>
          <dl className="home_dl">
            <dt>三 售前</dt>
            <dd className="return_dd">1.售前-门店列表找不到门店 <a>&gt;</a></dd>
            <dd className="return_dd">2.售前-经纪人列表找不到经纪人 <a>&gt;</a></dd>
            <dd className="return_dd">3.经纪人没有头像 <a>&gt;</a></dd>
            <dd className="return_dd">4.如何创建门店 <a>&gt;</a></dd>
            <dd className="return_dd">5.如何新增经纪人 <a>&gt;</a></dd>
            <dd className="return_dd">6.门店人数发生变化，如何调整 <a>&gt;</a></dd>
            <dd className="return_dd">7.如何修改经纪人手机号 <a>&gt;</a></dd>
            <dd className="return_dd">8.经纪人转店了，如何操作 <a>&gt;</a></dd>
            <dd className="return_dd">9.如何添加门店拜访日程 <a>&gt;</a></dd>
          </dl>
        </li>
        <li>
          <dl className="home_dl">
            <dt>四 售中</dt>
            <dd className="return_dd">1.打卡失败 <a>&gt;</a></dd>
            <dd className="return_dd">2.添加拜访记录时无法选择【到店】拜访 <a>&gt;</a></dd>
            <dd className="return_dd">3.如何添加对门店管理层（店长等）的拜访记录 <a>&gt;</a></dd>
            <dd className="return_dd">4.如何批量添加客户培训类的拜访记录 <a>&gt;</a></dd>
            <dd className="return_dd">5.如何通过销控APP直接给经纪人打电话或发短信 <a>&gt;</a></dd>
          </dl>
        </li>
        <li>
          <dl className="home_dl">
            <dt>五 查看拜访完成情况和业绩完成情况</dt>
            <dd className="return_dd">1.查看拜访完成情况 <a>&gt;</a></dd>
            <dd className="return_dd">2.查看业绩完成情况 <a>&gt;</a></dd>
          </dl>
        </li>
      </ul>
    )
  }
}
