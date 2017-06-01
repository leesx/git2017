import React from 'react';
import  { DatePicker } from 'components/Pickers'
import Loading from 'components/common/Loading'
import {fetchData,DateUtils,transTableDataSource, transColumnsData,mergeColumnsWidth} from 'helpers'
import {message, Icon, Row, Col, Button,Checkbox, Table, Pagination} from 'antd'

let columns = []

export default class DuringAnalysis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			tableDataSource:{
				dataSource:[], //table数据源
			},
			chkbox: true,
			isLoadingShow: true
		};
		this.handleSearch();
		this.clickCheckbox = this.clickCheckbox.bind(this)
	}
	refreshState = (rsp) => {
		if(rsp.code=="000"){
			if(rsp.data.records.length){
				const columnsData = rsp.data.records[0].row
				columns = transColumnsData(columnsData)
				//修改columns 指定字段的宽度
				mergeColumnsWidth(columns,{'billreport_0':200,})
				const dataSource = transTableDataSource(rsp.data.records.slice(1))
				this.setState(Object.assign(this.state.tableDataSource,{
					dataSource,
				}))
			}
		}
	};
	//更新日期时间
	updateDateTime = (startOrEnd, dateAndTime) => {
		const dateField = startOrEnd == "start" ? 'startDate' : 'endDate'
		this.setState({
			[dateField]:DateUtils.newDateNoTime(dateAndTime)
		});
	}
	//点击查询按钮
	searchClick = () => {
		this.handleSearch();
	}
	//点击统计占比
	clickCheckbox(e){
		this.setState({
			chkbox: e.target.checked
		}, () => {
			this.handleSearch()
		})
	}
	//弹出加载动画
	showLoading = () => {
		if (!this.state.isLoadingShow) {
			this.setState({isLoadingShow: true});
		}
	}
	//隐藏加载动画
	hiddenLoading = () => {
		if (this.state.isLoadingShow) {
			this.setState({isLoadingShow: false});
		}
	}
	//查询结果
	handleSearch = () => {
		let {chkbox,startDate,endDate} = this.state;
		const date = {
			startDate : DateUtils.transformString(DateUtils.toValueGroupsNoTime(startDate)),
			endDate : DateUtils.transformString(DateUtils.toValueGroupsNoTime(endDate)),
		}
		chkbox = chkbox == true ? 1 : 0;
		const diffTime = startDate.getTime() - endDate.getTime()
		if(diffTime > 0){
			message.warn('开始时间必须小于结束时间,请重新选择',3)
			return false;
		}
		this.showLoading();
		//发起ajax请求
		fetchData({
			url: "/saas/order/queryTimeReport.ajax",
			method: "POST",
			data: {
				...date,
				isShowPro: chkbox
			}
		}).then((rsp) => {
			this.refreshState(rsp);
		}).catch((error) => {
			console.error(error);
		}).finally(() => {
			this.hiddenLoading();
		});
	}
	render() {
		const { startDate, endDate} = this.state
		const { dataSource } = this.state.tableDataSource

		return (
			<div>
				<Row className="query-pan">
					<Col xs={24} md={8}>

						{
							<div className="query-pan-item">
								<DatePicker updateDateTime={this.updateDateTime} date={startDate} startOrEnd="start"/>
								<Icon type="minus" className="icon-spliter"/>
								<DatePicker updateDateTime={this.updateDateTime} date={startDate} startOrEnd="end"/>
							</div>
						}

					</Col>
					<Col xs={12} md={8}>
						<Checkbox onChange={this.clickCheckbox}>统计占比</Checkbox>
						<Button type="primary"  onClick={this.searchClick}>查询</Button>
					</Col>
				</Row>
				<div className="yunpad-table">
						<Table
					    columns={columns}
					    dataSource={dataSource}
					    bordered
              pagination={false}
							scroll={{ x: '120%', y: 400 }}
					  />
        </div>
				<Loading isLoadingShow={this.state.isLoadingShow}/>
			</div>
		);
	}
}
