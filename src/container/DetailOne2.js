/**
 * Created by zhouzhen on 2017/1/18.
 */
import React, {Component} from 'react';
import Detail from '../components/DetailDl';
import Choose from '../components/Choose';

export default class DetailOne2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type:1
    };
    this.changeType=this.changeType.bind(this);
    this.json = {
      1: [{
        title: "安卓系统-权限设置",
        content: [{
          h4: "第一步  进入设置页面，点击【应用管理】",
          img: "121"
        }, {
          h4: "第二步  进入应用管理页面，点击【销售管理】",
          img: "122"
        }, {
          h4: "第三步  进入应用信息页面，点击【权限】",
          img: "123"
        }, {
          h4: "第四步  将所有权限打开",
          img: "124"
        }]
      }],
      2: [{
        title: "安卓系统-信任销控APP",
        content: [{
          h4: "第一步  进入设置页面，点击【权限管理】",
          img: "125"
        }, {
          h4: "第二步  进入权限管理页面，点击【销售管理】",
          img: "126"
        }, {
          h4: "第三步  参考下图进行权限设置",
          img: "127"
        }]
      }, {
        title: "安卓系统-权限设置",
        content: [{
          h4: "第一步  进入设置页面，点击【应用管理】",
          img: "128"
        }, {
          h4: "第二步  进入应用管理页面，点击【销售管理】",
          img: "129"
        }, {
          h4: "第三步  进入应用信息页面，点击【权限】",
          img: "1210"
        }, {
          h4: "第四步  参考下图进行权限设置",
          img: "1211"
        }]
      }],
      3: [{
        title: "安卓系统-权限设置",
        content: [{
          h4: "第一步  进入设置页面，点击【其他应用管理】",
          img: "1212"
        }, {
          h4: "第二步  进入应用管理页面，点击【销售管理】",
          img: "1213"
        }, {
          h4: "第三步  进入应用信息页面，点击【权限管理】",
          img: "1214"
        }, {
          h4: "第四步  将所有权限打开",
          img: "1215"
        }]
      }],
      4: [{
        title: "安卓系统-权限设置",
        content: [{
          h4: "第一步  进入设置页面，点击【其他应用管理】",
          img: "1216"
        }, {
          h4: "第二步  进入应用管理页面，点击【销售管理】",
          img: "1217"
        }, {
          h4: "第三步  进入应用信息页面，点击【权限管理】",
          img: "1218"
        }, {
          h4: "第四步  将所有权限打开",
          img: "1219"
        }]
      }],
      5: [{
        title: "安卓系统-权限设置",
        content: [{
          h4: "第一步  打开【i管家】",
          img: "1220"
        }, {
          h4: "第二步  进入i管家页面，点击【软件管理】",
          img: "1221"
        }, {
          h4: "第三步  进入软件管理页面，点击【软件权限管理】",
          img: "1222"
        }, {
          h4: "第四步  进入软件权限管理页面，点击【销售管理】",
          img: "1223"
        }, {
          h4: "第五步 信任该软件，并将所有权限打开",
          img: "1224"
        }]
      }]
    }
  }

  changeType(type){
    console.log(type)
    this.setState({
      type:type
    })
  }

  render() {
    let type = this.state.type;
    return (
      <div>
        <dl className="phone_dl">
          <dt>请选择使用的机型：</dt>
          <dd className={type === 1 ? "current" : null} onClick={()=>{this.changeType(1)}}>三星</dd>
          <dd className={type === 2 ? "current" : null} onClick={()=>{this.changeType(2)}}>华为</dd>
          <dd className={type === 3 ? "current" : null} onClick={()=>{this.changeType(3)}}>小米</dd>
          <dd className={type === 4 ? "current" : null} onClick={()=>{this.changeType(4)}}>魅族</dd>
          <dd className={type === 5 ? "current" : null} onClick={()=>{this.changeType(5)}}>vivo</dd>
        </dl>
        <Detail data={this.json[type]}/>
        <Choose/>
      </div>
    )
  }
}
