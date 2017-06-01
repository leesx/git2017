import Picker from 'react-mobile-picker';
import React, {Component, PropTypes} from 'react';
import {DateUtils} from 'helpers';
export default class DatePicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isPickerShow: false,
			valueGroups: DateUtils.toValueGroupsNoTime(this.props.date),
			optionGroups: DateUtils.toOptionGroupsNoTime(this.props.date)
		};
	}
	componentWillReceiveProps(nextProps){

	}
	// Update the value in response to user picking event
	handleChange = (name, value) => {

		/**
		 * 生成下一个state
		 * @param  {[type]} valueGroups  [description]
		 * @param  {[type]} optionGroups [description]
		 * @return [type]                [description]
		 */

		const genNextState = ({valueGroups, optionGroups}) => {
			const nextState = {
				valueGroups: {
					...valueGroups,
					[name]: value
				}
			};
			const totalDate = new Date(valueGroups.year,valueGroups.month,0).getDate()
			nextState.optionGroups = {
				...optionGroups,
				day: generateNumberArray(1, totalDate)
			};
			this.props.updateDateTime(this.props.startOrEnd, nextState.valueGroups);
			return nextState;
		}
		this.setState(genNextState);
	};
	togglePicker = () => {

		this.setState(({isPickerShow}) => ({
			isPickerShow: !isPickerShow,
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
			<div className="date-time-picker">
				<div onClick={this.togglePicker}>
					<a href="javascript:;">
						{valueGroups.year + "/" + valueGroups.month + "/" + valueGroups.day}
					</a>
					<i className="icon iconfont icon-moreunfold"></i>
				</div>
				<div className="picker-modal-container">
					<div className="picker-modal-mask" style={maskStyle} onClick={this.togglePicker}></div>
					<div className={pickerModalClass} ref="modal">
						<div className="icon iconfont icon-shoujiwangye01"></div>
						<header>
							<div className="title">日期选择
								<span onClick={this.togglePicker}>确定</span>
							</div>
						</header>
						<Picker ref="picker" optionGroups={optionGroups} valueGroups={valueGroups} onChange={this.handleChange}/>
					</div>
				</div>
			</div>
		);
	}
}
function generateNumberArray(begin, end) {
	let array = [];
	for (let i = begin; i <= end; i++) {
		array.push((i < 10
			? '0'
			: '') + i);
	}
	return array;
}
