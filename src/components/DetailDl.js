/**
 * Created by zhouzhen on 2017/1/22.
 */
import React, {Component} from 'react';

export default class DetailDl extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {data}=this.props;
    return (
      <div>
        {data.map(function (N) {
          return (
            <dl className="detail_dl" key={N.title}>
              <dt>{N.title}</dt>
              {N.content.map((n) => {
                return (
                  <dd key={n.h4}>
                    <h4>{n.h4}</h4>
                    <div><img src={`${window.resurl}/src/img/${n.img}.png`} alt=""/></div>
                  </dd>
                )
              })}
            </dl>
          )
        })}
      </div>
    )
  }
}

