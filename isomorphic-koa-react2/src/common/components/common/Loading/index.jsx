import React from 'react'
import {Modal} from 'antd'
import './loading.less'

export default class Loading extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isShow:this.props.isLoadingShow
    };
  }

  componentWillReceiveProps=(nextProps)=>{
    this.setState({isShow:nextProps.isLoadingShow});
  };

  render() {
    const {isShow} = this.state;

    return (
			<div >
				<Modal className="loading-modal"  visible={isShow}>
					<div className="loading-modal-body">
						<div className="loading" >
							<i className="icon iconfont icon-loading"></i>
						</div>
						<p>努力加载中...</p>
					</div>
        </Modal>
			</div>

    );
  }
}
