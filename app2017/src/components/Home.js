import React, { Component } from 'react';


import FixedTopbar from './widget/FixedTopbar.js'
import ChnGroup from './widget/ChnGroup.js'
import ChnItemLst from './widget/ChnItemLst.js'
import TabItem from './widget/TabItem.js'

import {data as y_data} from './../mock/yule.js'
import {data as h_data} from './../mock/hotnews.js'
import {data as s_data} from './../mock/shehui.js'

class App extends Component {
	state={
		dataSource:[]
	}
	componentDidMount(){
		this.fetchMockData()
	}

	fetchMockData(){
		const {cid} = this.props.params
		console.log(cid)

		if(cid === 'tuijian'){
			this.setState({
				dataSource:y_data.data
			})
		}else if(cid === 'shipin'){
			this.setState({
				dataSource:h_data.data
			})
		}else{
			this.setState({
				dataSource:s_data.data
			})
		}
	}
	componentWillReceiveProps(nextProps,nextState){
		this.fetchMockData()
	}
  render() {
		const { dataSource } = this.state
		console.log(dataSource)
    return (
      <div className="App">
        <div className="fixed-top">
          <FixedTopbar/>
          <ChnGroup />
        </div>
        <div className="scroll-view">
          <ChnItemLst dataSource={dataSource} />
        </div>

        <div className="fixed-bottom">
          <TabItem />
        </div>

      </div>
    );
  }
}

export default App;
