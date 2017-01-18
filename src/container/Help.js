/**
 * Created by zhouzhen on 2017/1/18.
 */
import React,{Component} from 'react'

export default class Help extends Component{

  render(){
    return (
      <ul>
        <li>
          <dl>
            <dt> 一 权限设置</dt>
            <dd>1.IOS系统权限设置</dd>
            <dd>2.安卓系统权限设置</dd>
            <dd>注：应用过程中80%左右的问题是由于权限不够导致的，如遇问题请先检查权限设置是否完整正确</dd>
          </dl>
        </li>
      </ul>
    )
  }
}
