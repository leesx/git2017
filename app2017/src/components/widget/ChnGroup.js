import React, { Component } from 'react';
import { Link } from 'react-router'


export default class ChnGroup extends Component {
  constructor(props){
    super(props)
    this.state={
      navitems:[
        {
          cid:'tuijian',
          name:'推荐'
        },
        {
          cid:'shipin',
          name:'视频'
        },
        {
          cid:'hotnews',
          name:'热点'
        },
        {
          cid:'shehui',
          name:'社会'
        },
        {
          cid:'yule',
          name:'娱乐'
        },
        {
          cid:'shipin',
          name:'视频'
        },
        {
          cid:'redian',
          name:'热点'
        },
        {
          cid:'shehui',
          name:'社会'
        },
        {
          cid:'yule',
          name:'娱乐'
        }
      ]
    }
  }
  render() {
    const { navitems } = this.state
    return (
      <div className="nav-wrap">
        <div className="nav-list">
          {
            navitems.map((item,index)=>{
              return <Link to={`/news/${item.cid}`} activeClassName="active" key={`navitem_${index}`}>{item.name}</Link>
            })
          }
        </div>
      </div>
    );
  }
}
