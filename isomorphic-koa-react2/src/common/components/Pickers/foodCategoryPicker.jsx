import Picker from 'react-mobile-picker';
import React from 'react';
import {fetchData,SiteInfo} from 'helpers'
export default class FoodCategoryPicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPickerShow: false,
			valueGroups: {
				title: "菜品分类名称"
			},
			optionGroups: {
				title: ["菜品分类名称"]
			}
		};
		this.sendRequest();
	}
	// send requst to get foodCategoryList
	sendRequest = () => {
		SiteInfo.getSiteInfo(() => {
			let foodCategoryList = SiteInfo.info.FDTypeLst;
			let optionsGroupTitle = ["菜品分类名称"];
			foodCategoryList.map((elem) => {
				optionsGroupTitle.push(elem.Key);
			});
			this.setState({
				foodCategoryList: foodCategoryList,
				optionGroups: {
					title: optionsGroupTitle
				}
			});
		});
	}
	// 上下滑动选择项会更新父组件相应的state
	handleChange = (name, value) => {
		console.log('欢动')
		this.setState(({valueGroups}) => ({
			valueGroups: {
				...valueGroups,
				[name]: value
			}
		}));
		let v;
		if (value == "菜品分类名称") {
			v = "全部";
		}
		for (let obj of this.state.foodCategoryList) {
			if (obj.Key == value) {
				v = obj.Value;
				break;
			}
		}
		if (typeof v != undefined) {
			this.props.refreshFoodCategory(v);
		}
	};
	togglePicker = () => {
		this.setState(({isPickerShow}) => ({
			isPickerShow: !isPickerShow
		}), () => {
			if (this.state.isPickerShow) {
				let dom = this.refs.modal;
				let screenWidth = window.screen.width;
				let domX = dom.getBoundingClientRect().left;
				let domW = dom.clientWidth;
				let left = domX + domW - screenWidth;
				if (left > 0) {
					dom.style.left = -(left + 5) + "px";
				}
			}
		});
	};
	render() {
		const {isPickerShow, optionGroups, valueGroups} = this.state;
		const maskStyle = {
			display: isPickerShow
				? 'block'
				: 'none'
		};
		const pickerModalClass = `picker-modal${isPickerShow
			? ' picker-modal-show'
			: ''}`;
		return (
			<div className="query-pan-item">
				<div onClick={this.togglePicker}>
					<a href="javascript:;">
						{valueGroups.title}
					</a>
					<i className="icon iconfont icon-moreunfold"></i>
				</div>
				<div className="picker-modal-container">
					<div className="picker-modal-mask" style={maskStyle} onClick={this.togglePicker}></div>
					<div className={pickerModalClass} ref="modal">
						<div className="icon iconfont icon-shoujiwangye01"></div>
						<header>
							<div className="title">菜品分类
								<span onClick={this.togglePicker}>确定</span>
							</div>
						</header>
						<Picker optionGroups={optionGroups} valueGroups={valueGroups} onChange={this.handleChange}/>
					</div>
				</div>
			</div>
		);
	}
}
