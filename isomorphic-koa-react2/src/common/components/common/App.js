import React, {Component, PropTypes} from 'react'
import {Icon} from 'antd'
import LeftMenu from './../LeftMenu';

//px 转化为rem
if (process.env.__CLIENT__ === true){
	(function(window,document){
			function init(){
					let w = document.documentElement.clientWidth || document.body.clientWidth;
					if(w<=640)
						w = 640
					document.documentElement.style.fontSize=w/10+'px';
			}
			init();
			window.onresize =function(){
					window.requestAnimationFrame(init)
			};
	})(window,document);
}



export default class App extends Component {
	constructor(props) {
		super(props)
		this.state={
			flag:false
		}
	}
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0)
		}
	}
	handleToggleMenu=()=>{
		this.setState({
			flag:!this.state.flag
		})
	}
	render() {
		return (
			<div className="main-layout">
				<div className="left-menu"  style = {{width:this.state.flag ? 200 : 0}}>
					<LeftMenu toggle={this.state.flag}/>
				</div>
				<div className="right-layout">
					<div className="switch-menu">
						<Icon type={ this.state.flag ? "menu-fold" : "menu-unfold" } onClick={this.handleToggleMenu} />
					</div>
					{this.props.children}
				</div>
			</div>
		)
	}
}
