/**
 * Created by zhouzhen on 2017/1/22.
 */
import React, {Component} from 'react';

export default class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num_useful: 0,
      num_useless: 0,
      is_click: 0
    }
    this.upguid = this.upguid.bind(this);
  }

  componentDidMount() {
    this.getAjax = $.ajax({
      url: "/apikongv2/getguidinfo/",
      type: "GET",
      data: $.extend({}, window.param),
      success: function (res) {
        this.getAjax = null;
        var res = (typeof res === "string") ? JSON.parse(res) : res;
        if (res.result.code == 0) {
          this.setState({
            num_useful: res.result.data.num_useful,
            num_useless: res.result.data.num_useless,
            is_click: res.result.data.is_click,
            is_use: res.result.data.is_use
          })
        } else {
          console.error(res.result.message)
        }
      }.bind(this),
      error: function () {
        console.log('get',"ajax失败")
      }
    })
  }

  componentWillUnmount() {
    this.getAjax && this.getAjax.abort()
    this.postAjax && this.postAjax.abort()
  }

  upguid(is_use) {
    if (this.state.is_click > 0) {
      return false;
    }
    this.postAjax && this.postAjax.abort();
    this.postAjax = $.ajax({
      url: "/apikongv2/upguid/",
      type: "GET",
      data: $.extend({}, window.param, {"is_use": is_use}),
      success: function (res) {
        this.getAjax = null
        var res = (typeof res === "string") ? $.parseJSON(res) : res;
        if (res.result.code == 0) {
          if (is_use) {
            this.setState({
              num_useful: this.state.num_useful - (-1),
              is_click: 1,
              is_use: 1
            })
          } else {
            this.setState({
              num_useless: this.state.num_useless - (-1),
              is_click: 1,
              is_use: 0
            })
          }
        } else {
          console.error('post',res.result.message)
        }
      }.bind(this)
    })
  }

  render() {
    var top = this.state.num_useful;
    var bot = this.state.num_useless;
    var is_click = this.state.is_click;
    var is_use = this.state.is_use;
    top = top > 999 ? "999+" : top;
    bot = bot > 999 ? "999+" : bot;
    return (
      <div className="choose_box clearfix">
        <aside className={(is_click > 0 && is_use > 0) ? "detail_choose" : null}><a className="icon_help_top"
                                                                                    onClick={() => this.upguid(1)}>有用
          （{top}）</a></aside>
        <aside className={(is_click > 0 && is_use == 0) ? "detail_choose" : null}><a className="icon_help_bottom"
                                                                                     onClick={() => this.upguid(0)}>没用
          （{bot}）</a></aside>
      </div>
    )
  }
}

