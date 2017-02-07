/**
 * Created by zhouzhen on 2017/1/18.
 */
require("./css/index.scss");

import React, {PropTypes} from 'react';
import {render} from 'react-dom';

import configureStore from './store/configureStore'

import Root from './container/Root';

//获取url参数的值：name是参数名
window.getQueryString = function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  }

// 设置url参数值,ref参数名, value新的参数值
window.changeURLPar = function (url, ref, value) {
  var str = "";
  if (url.indexOf('?') != -1)
    str = url.substr(url.indexOf('?') + 1);
  else
    return url + "?" + ref + "=" + value;
  var returnurl = "";
  var setparam = "";
  var arr;
  var modify = "0";
  if (str.indexOf('&') != -1) {
    arr = str.split('&');
    for (var i in arr) {
      if (arr[i].split('=')[0] == ref) {
        setparam = value;
        modify = "1";
      }
      else {
        setparam = arr[i].split('=')[1];
      }
      returnurl = returnurl + arr[i].split('=')[0] + "=" + setparam + "&";
    }
    returnurl = returnurl.substr(0, returnurl.length - 1);
    if (modify == "0")
      if (returnurl == str)
        returnurl = returnurl + "&" + ref + "=" + value;
  }
  else {
    if (str.indexOf('=') != -1) {
      arr = str.split('=');
      if (arr[0] == ref) {
        setparam = value;
        modify = "1";
      }
      else {
        setparam = arr[1];
      }
      returnurl = arr[0] + "=" + setparam;
      if (modify == "0")
        if (returnurl == str)
          returnurl = returnurl + "&" + ref + "=" + value;
    }
    else
      returnurl = ref + "=" + value;
  }
  return url.substr(0, url.indexOf('?')) + "?" + returnurl;
}


window.param={
  citycode:getQueryString("citycode"),
  jobid:getQueryString("jobid"),
  token:getQueryString("token"),
  guid_id:getQueryString("guid_id"),
  secretchannel:"sina"
};

window.resurl="http://res2.esf.leju.com/xk_help/";

const state = {
  guid_id: window.param.guid_id || 0
};

const store = configureStore(state);

render(
  <Root store={store}/>,
  document.getElementById('APP')
);