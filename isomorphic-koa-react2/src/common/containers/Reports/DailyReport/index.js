import React from 'react';
import  { DatePicker } from 'components/Pickers'
import Loading from 'components/common/Loading';
import {fetchData,DateUtils,transTableDataSource, transColumnsData} from 'helpers'
import {message, Icon, Row, Col, Button, Table, Pagination} from 'antd'

let columns =[]
export default class DailyReport extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			startDate: new Date(),
			endDate: new Date(),
			tableDataSource:{
				current:1,
				pageSize:15,
				total:0,//总共数据条数
				dataSource:[], //table数据源
			},
			isLoadingShow: true
		};
		this.handleSearch();
	}
	refreshState = (rsp) => {
		if(rsp.code=="000"){
			const total = rsp.data.recordCount*1
			if(rsp.data.records.length){
				const columnsData = rsp.data.records[0].row
				columns = transColumnsData(columnsData)
				const dataSource = transTableDataSource(rsp.data.records.slice(1))
				this.setState(Object.assign(this.state.tableDataSource,{
					total,
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
	//更新页码
	handleChangePagination=(current)=>{
		this.setState(Object.assign(this.state.tableDataSource,{
			current
		}))
    this.handleSearch();
  }
  //点击查询按钮
  searchClick=()=>{
		this.setState(Object.assign(this.state.tableDataSource,{
			current:1
		}))
    this.handleSearch();
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
		const {startDate,endDate} = this.state
		const date = {
			startDate : DateUtils.transformString(DateUtils.toValueGroupsNoTime(startDate)),
			endDate : DateUtils.transformString(DateUtils.toValueGroupsNoTime(endDate)),
		}
		const { pageSize,current } = this.state.tableDataSource
		const diffTime = startDate.getTime() - endDate.getTime()

		if(diffTime > 0){
			message.warn('开始时间必须小于结束时间,请重新选择',3)
			return false;
		}
		this.showLoading();
		//console.log(fetchData())
		//发起ajax请求
		fetchData({
			url: "/saas/order/querybusinessincomereport.ajax",
			method: "POST",
			data: {
				...date,
				pageNo: current,
				pageSize,
			}
		}).then((rsp) => {
			this.refreshState(rsp);
		}). finally(() => {
			this.hiddenLoading();
		});
	}
	render() {
		const { startDate, endDate} = this.state
		const { dataSource, scrollX, current,total,  pageSize, } = this.state.tableDataSource
		return (
			<div>
				<Row className="query-pan" type="flex" justify="start">
					<Col span={8} className="query-pan-item">
						<DatePicker updateDateTime={this.updateDateTime} date={startDate} startOrEnd="start"/>
						<Icon type="minus" className="icon-spliter"/>
						<DatePicker updateDateTime={this.updateDateTime} date={endDate} startOrEnd="end"/>
					</Col>
					<Col>
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
					{
						dataSource && dataSource.length ?
						<Pagination
				      total={total}
				      showTotal={(total, range) => `当前${current}/${Math.ceil(total/pageSize)}页,每页显示${pageSize}条,共 ${total} 条`}
				      pageSize={pageSize}
							onChange={this.handleChangePagination}
				      defaultCurrent={1}
							current={current}
				    /> : null
					}

        </div>
				<Loading isLoadingShow={this.state.isLoadingShow}/>
			</div>
		);
	}
}
