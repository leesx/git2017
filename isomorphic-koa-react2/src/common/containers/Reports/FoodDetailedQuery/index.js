import React from 'react';
import  {DateTimePicker,FoodCategoryPicker,FoodMarkPicker} from 'components/Pickers'
import Loading from 'components/common/Loading'
import {fetchData,DateUtils} from 'helpers'

import {message, Icon, Row, Col, Button, Input, Table, Pagination} from 'antd'
const Search = Input.Search;

const columns = [{
	title:'详情',
	children:[{
    "title": "账单号",
    "dataIndex": "saasOrderKey",
    "key": "saasOrderKey",
    "width": 200
  },
  {
    "title": "台牌号",
    "dataIndex": "tableName",
    "key": "tableName",
    "width": 100
  },
  {
    "title": "日期",
    "dataIndex": "createTime",
    "key": "createTime",
    "width": 150
  },
  {
    "title": "分类",
    "dataIndex": "foodCategoryName",
    "key": "foodCategoryName",
    "width": 100
  },
  {
    "title": "品名",
    "dataIndex": "foodName",
    "key": "foodName",
    "width": 100
  },
  {
    "title": "规格",
    "dataIndex": "unit",
    "key": "unit",
    "width": 100
  }]
},{
	title:'点菜',
	children:[{
    "title": "人员",
    "dataIndex": "orderBy",
    "key": "orderBy",
    "width": 100
  },
  {
    "title": "数量",
    "dataIndex": "foodNumber",
    "key": "foodNumber",
    "width": 100
  },
  {
    "title": "时间",
    "dataIndex": "orderTime",
    "key": "orderTime",
    "width": 100
  }]
},{
	title:'退菜',
	children:[{
    "title": "人员",
    "dataIndex": "cancelBy",
    "key": "cancelBy",
    "width": 100
  },
  {
    "title": "数量",
    "dataIndex": "foodCancelNumber",
    "key": "foodCancelNumber",
    "width": 100
  },
  {
    "title": "时间",
    "dataIndex": "cancelTime",
    "key": "cancelTime",
    "width": 100
  },
  {
    "title": "原因",
    "dataIndex": "cancelReason",
    "key": "cancelReason",
    "width": 200
  }]
},{
	title:'增菜',
	children:[{
    "title": "人员",
    "dataIndex": "sendBy",
    "key": "sendBy",
    "width": 100
  },
  {
    "title": "数量",
    "dataIndex": "foodSendNumber",
    "key": "foodSendNumber",
    "width": 100
  },
  {
    "title": "时间",
    "dataIndex": "sendTime",
    "key": "sendTime",
    "width": 100
  },
  {
    "title": "原因",
    "dataIndex": "sendReason",
    "key": "sendReason",
    "width": 200
  }]
},{
	title:'其他',
	children:[{
    "title": "临时菜",
    "dataIndex": "isTempFood",
    "key": "isTempFood",
    "width": 100
  },
  {
    "title": "套餐标记",
    "dataIndex": "isSetFood",
    "key": "isSetFood",
    "width": 100
  },
  {
    "title": "套餐名",
    "dataIndex": "setFoodName",
    "key": "setFoodName",
    "width": 100
  },
  {
    "title": "要求",
    "dataIndex": "setFoodRemark",
    "key": "setFoodRemark",
    "width": 240
  }]
}]
export default class FoodDetailedQuery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keyword: "",
			startDateTime: new Date(),
			endDateTime: new Date(),
			tableDataSource:{
				current:1,
				pageSize:15,
				total:0,//总共数据条数
				dataSource:[], //table数据源
			},
			foodCategoryNameLst: "全部",
			foodName: "",
			foodAlert: "",
			isLoadingShow: true
		};
		this.handleSearch();
		this.refreshTextInput = this.refreshTextInput.bind(this)
	}
	refreshKeyword = (name) => {
		this.setState({"keyword": name});
	};
	refreshFoodCategory = (value) => {
		this.setState({"foodCategoryNameLst": value});
	};
	refreshFoodAlert = (value) => {
		this.setState({"foodAlert": value});
	};
	refreshState = (rsp) => {
		if (rsp.code == "000") {
			const total = rsp.data.recordCount*1
			const dataSource = rsp.data.records
			this.setState(Object.assign(this.state.tableDataSource,{
				total,
				dataSource,
			}))
		}
	};
	refreshTextInput(value){
		const foodName = value.trim()
		if(!foodName) return ;
		this.setState({foodName},()=>{
			this.handleSearch()
		})
	}
	//更新日期时间
	updateDateTime = (startOrEnd, dateAndTime) => {
		const dateField = startOrEnd == "start" ? 'startDateTime' : 'endDateTime'
		this.setState({
			[dateField]:DateUtils.newDateTime(dateAndTime)
		});
	}
	//更新页码
	handleChangePagination=(current)=>{
		this.setState(Object.assign(this.state.tableDataSource,{
			current
		}))
    this.handleSearch();
  }

	handleChangeSearch=(e)=>{
		const foodName = e.target.value.trim()
    this.setState({foodName});
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
		let {foodAlert, foodCategoryNameLst, foodName,startDateTime,endDateTime} = this.state;
		const dateTime = {
			 startDateTime : DateUtils.transformString(DateUtils.transformToValueGroups(startDateTime)),
			 endDateTime : DateUtils.transformString(DateUtils.transformToValueGroups(endDateTime)),
		}
		const { pageSize,current } = this.state.tableDataSource

		const diffTime = startDateTime.getTime() - endDateTime.getTime()
		if(diffTime > 0){
			message.warn('开始时间必须小于结束时间,请重新选择',3)
			return false;
		}

		this.showLoading();
		//发起ajax请求
		fetchData({
			url: "/saas/order/queryFoodDetailReport.ajax",
			method: "POST",
			data: {
				foodAlert,
				foodCategoryName: foodCategoryNameLst,
				foodName,
				...dateTime,
				// startDateTime,
				// endDateTime,
				pageNo: current,
				pageSize,
			}
		}).then((rsp) => {
			this.refreshState(rsp);
		}).catch((error) => {
			console.error(error);
		}). finally(() => {
			this.hiddenLoading();
		});
	}
	render() {
		const {startDateTime,endDateTime} = this.state
		const { dataSource, scrollX, current,total,  pageSize, } = this.state.tableDataSource
		return (
			<div>
				<div className="query-pan">
					<Row>
						<Col xs={24} md={12}>
							<div className="query-pan-item">
								<DateTimePicker updateDateTime={this.updateDateTime} date={startDateTime} startOrEnd="start"/>
								<Icon type="minus" className="icon-spliter"/>
								<DateTimePicker updateDateTime={this.updateDateTime} date={endDateTime} startOrEnd="end"/>
							</div>
						</Col>
						<Col xs={8} md={4}>
							<FoodMarkPicker refreshFoodAlert={this.refreshFoodAlert}/>
						</Col>
						<Col xs={8} md={4}>
							<FoodCategoryPicker refreshFoodCategory={this.refreshFoodCategory}/>
						</Col>
					</Row>
					<Row style={{marginTop:10}}>
						<Col>
							<Search
								style={{ width: 200,marginRight:10 }}
								onSearch={this.refreshTextInput}
								onChange={this.handleChangeSearch}
								placeholder="请输入菜品名称"
							/>
							<Button type="primary"  onClick={this.searchClick}>查询</Button>
						</Col>
					</Row>
				</div>

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
