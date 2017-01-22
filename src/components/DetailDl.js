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
        {React.Children.map(data, function (N) {
          return (
            <dl className="detail_dl">
              <dt>N.title</dt>
              {React.Children.map(N, (n) => {
                return (
                  <dd>
                    <h4>n.h4</h4>
                    <div><img src={`.src/img/${n.img}.png`} alt=""/></div>
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